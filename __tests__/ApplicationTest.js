import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { STRING_CALCULATOR_ERROR_MESSAGES } from "../src/constants/errorMessages.js";

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
  test("기본 구분자 사용", async () => {
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

  test("예외 테스트: 빈 문자열 입력", async () => {
    const inputs = [""];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      STRING_CALCULATOR_ERROR_MESSAGES.emptyInput
    );
  });

  test("예외 테스트: 구분자 앞 또는 뒤에 숫자 미입력", async () => {
    const inputs = [",1:,"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      STRING_CALCULATOR_ERROR_MESSAGES.noNumbers
    );
  });

  test("예외 테스트: 유효하지 않는 숫자 입력", async () => {
    const inputs = ["1:a,b"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      STRING_CALCULATOR_ERROR_MESSAGES.invalidNumber
    );
  });

  test("예외 테스트: 음수 포함 입력", async () => {
    const inputs = ["-1,2,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      STRING_CALCULATOR_ERROR_MESSAGES.negativeNumber
    );
  });

  test("예외 테스트: 커스텀 구분자 미입력", async () => {
    const inputs = ["//\\n1;2;3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      STRING_CALCULATOR_ERROR_MESSAGES.emptyCustomSeparator
    );
  });
});
