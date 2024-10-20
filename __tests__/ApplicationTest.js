import App from "../src/App.js";
import Errors from "../src/error.js";
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

  test("커스텀 구분자 여러 개 입력", async () => {
    const inputs = ["//;!\n1!2;3,4"];
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
      `[ERROR] ${Errors.NEGATIVE_NUMBERS}`
    );
  });

  test("예외: 구분자가 없음", async () => {
    const inputs = ["\\/n12"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(`[ERROR] ${Errors.INVALID_FORMAT}`);
  });

  test("예외: 커스텀 구분자가 기본 구분자와 동일한 경우", async () => {
    const inputs = ["\\:/n1,2"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(`[ERROR] ${Errors.INVALID_FORMAT}`);
  });

  test("예외: 문자 입력", async () => {
    const inputs = ["a,b,c"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(`[ERROR] ${Errors.INVALID_FORMAT}`);
  });

  test("예외: 빈 문자열 입력", async () => {
    const inputs = [""];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(`[ERROR] ${Errors.EMPTY_INPUT}`);
  });

  test("예외: 커스텀 구분자가 숫자일 경우", async () => {
    const inputs = ["//1\n2:3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      `[ERROR] ${Errors.WRONG_DELIMETER}`
    );
  });

  test("예외: 숫자 사이에 구분자가 여러 개일 경우", async () => {
    const inputs = ["1,2,,,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      `[ERROR] ${Errors.WRONG_DELIMETER}`
    );
  });

  test("예외: 숫자크기가 MAX_SAFE_INTEGER를 초과하는 경우", async () => {
    const inputs = ["1,2,3,1.8E308+1"];
    mockQuestions(inputs);

    const app = new App();
    
    await expect(app.run()).rejects.toThrow(
      `[ERROR] ${Errors.INVALID_FORMAT}`
    );
  });
});
