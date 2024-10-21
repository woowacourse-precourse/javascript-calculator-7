import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "../src/constants.js";

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

  test("예외 테스트", async () => {
    const inputs = ["-1,2,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("쉼표와 콜론을 기본 구분자로 사용", async () => {
    const inputs = ["1,2:3"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 6"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("잘못된 구분자 사용 시 에러", async () => {
    const inputs = ["//.\\n1.2"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(`[ERROR]: ${ERROR_MESSAGES.INVALID_SEPARATOR}`);
  });

  test("숫자가 구분자로 사용될 때 에러", async () => {
    const inputs = ["//1\\n21212"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(`[ERROR]: ${ERROR_MESSAGES.NUMERIC_SEPARATOR}`);
  });

  test("구분자가 먼저 등장할 때 에러", async () => {
    const inputs = [",1,2"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(`[ERROR]: ${ERROR_MESSAGES.INVALID_START}`);
  });

  test("구분자가 마지막에 등장할 때 에러", async () => {
    const inputs = ["1,2,3,"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(`[ERROR]: ${ERROR_MESSAGES.INVALID_END}`);
  });

  test("여러 자리 커스텀 구분자 사용", async () => {
    const inputs = ["//;;\\n1;;2;;3"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 6"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("큰 숫자 처리", async () => {
    const inputs = ["1,1000000000000000000000000"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 1000000000000000000000001"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("연속된 구분자가 사용될 때 에러", async () => {
    const inputs = ["1,,2"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(`[ERROR]: ${ERROR_MESSAGES.MULTIPLE_SEPARATORS}`);
  });
});
