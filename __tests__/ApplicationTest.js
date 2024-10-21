import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "../src/errorMessages.js";

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
  test("쉼표를 구분자로 사용하여 입력된 숫자의 합을 계산한다", async () => {
    const inputs = ["1,2,3"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const outputs = ["결과 : 6"];
    const app = new App();
    await app.run();
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("콜론을 구분자로 사용하여 입력된 숫자의 합을 계산한다", async () => {
    const inputs = ["1:2:3"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const outputs = ["결과 : 6"];
    const app = new App();
    await app.run();
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("쉼표와 콜론을 혼합하여 구분자로 사용한 경우 숫자의 합을 계산한다", async () => {
    const inputs = ["1,2:3,4:5"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const outputs = ["결과 : 15"];
    const app = new App();
    await app.run();
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자를 사용하여 입력된 숫자의 합을 계산한다", async () => {
    const inputs = ["//@\\n1@2@3"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const outputs = ["결과 : 6"];
    const app = new App();
    await app.run();
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("빈 문자열 입력 시 결과 값으로 0을 반환한다", async () => {
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

  test("유효하지 않은 구분자 사용 시 예외를 발생시킨다", async () => {
    const inputs = ["1+2+3"];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.NO_VALID_DIVIDER);
  });

  test("커스텀 구분자 정의 후 숫자를 입력하지 않은 경우 예외를 발생시킨다", async () => {
    const inputs = ["//;\\n"];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.NO_NUMBERS_INPUT);
  });

  test("음수를 입력한 경우 예외를 발생시킨다", async () => {
    const inputs = ["-1,2,3"];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.NEGATIVE_NUMBER);
  });

  test("숫자가 아닌 값을 입력한 경우 예외를 발생시킨다", async () => {
    const inputs = ["1,a,3"];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.INVALID_INPUT);
  });
});
