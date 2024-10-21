import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { DEFAULT_ERROR_MESSAGE, ERROR_MESSAGES } from "../src/constants/messages.js";

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

  test("음수값을 입력할 경우", async () => {
    const inputs = ["-1,2,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.POSITIVE_NUMBER);
  });

  test("사용자가 유효하지 않는 값을 입력할 경우", async () => {
    const inputs = ["1,2,3,a"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      `${DEFAULT_ERROR_MESSAGE} ${ERROR_MESSAGES.INVALID_NUMBER}`
    );
  });

  test("빈 문자열을 입력할 경우", async () => {
    const inputs = [" "];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      `${DEFAULT_ERROR_MESSAGE} ${ERROR_MESSAGES.EMPTY_INPUT}`
    );
  });

  test("구분자 사이에 숫자가 없을 경우", async () => {
    const inputs = ["//;\\n;;;"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      `${DEFAULT_ERROR_MESSAGE} ${ERROR_MESSAGES.NUMBER_BETWEEN_DELIMITER}`
    );
  });
});
