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
  test("커스텀 구분자 사용", async () => {
    const inputs = ["//;\\n1"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 1"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("음수 입력시 예외 테스트", async () => {
    const inputs = ["-1,2,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 음수는 허용되지 않습니다."
    );
  });

  test("숫자, 구분자 외에 값 입력시 예외 발생", async () => {
    const inputs = ["1,2,a,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 구분자와 숫자가 아닌 값은 포함될 수 없습니다."
    );
  });

  test("//으로 시작하지만 \n이 존재하지 않을시 예외 발생", async () => {
    const inputs = ["//1,2:3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 잘못된 커스텀 구분자 형식입니다."
    );
  });

  test("공백이 포함된 입력시 예외 발생", async () => {
    const inputs = [" 1,2, 3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 공백이 포함될 수 없습니다."
    );
  });

  test("커스텀 구분자가 빈 구분자인 경우", async () => {
    const inputs = ["//\\n1"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 빈 구분자는 허용되지 않습니다."
    );
  });

  test("빈 문자열 사용", async () => {
    const inputs = [""];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 0"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자와 기본 구분자 혼합해서 사용", async () => {
    const inputs = ["//*\\n1,3*2:3"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 9"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
