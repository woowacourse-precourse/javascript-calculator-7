import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("문자열 계산기", () => {
  test("커스텀 구분자만 사용", async () => {
    const inputs = ["//;\n1;2"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const expectedOutputs = ["결과 : 3"];

    const app = new App();
    await app.run();

    expectedOutputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("기본 구분자와 커스텀 구분자를 혼용", async () => {
    const inputs = ["//;\n1;2:3,4"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const expectedOutputs = ["결과 : 10"];

    const app = new App();
    await app.run();

    expectedOutputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("공백 제거가 되는지 테스트", async () => {
    const inputs = ["1, 2, 3"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const expectedOutputs = ["결과 : 6"];

    const app = new App();
    await app.run();

    expectedOutputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("예외: 음수 존재", async () => {
    const inputs = ["-1,2,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 음수는 입력할 수 없습니다."
    );
  });

  test("예외: 구분자가 문자 1개가 아닌 경우", async () => {
    const inputs = ["\\;!/n1,2;3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 계산할 수 있는 형식이 아닙니다."
    );
  });

  test("예외: 구분자가 없음", async () => {
    const inputs = ["\\/n12"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 계산할 수 있는 형식이 아닙니다."
    );
  });

  test("예외: 커스텀 구분자가 기본 구분자와 동일한 경우", async () => {
    const inputs = ["\\:/n1,2"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 계산할 수 있는 형식이 아닙니다."
    );
  });

  test("예외: 문자 입력", async () => {
    const inputs = ["a,b,c"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 계산할 수 있는 형식이 아닙니다."
    );
  });

  test("예외: 빈 문자열 입력", async () => {
    const inputs = [""];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 입력된 문자열이 없습니다."
    );
  });
});
