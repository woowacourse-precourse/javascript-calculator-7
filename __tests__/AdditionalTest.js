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

describe("문자열 테스트", () => {
  const ERROR_INPUTS = [
    [["//\\n1:2"], "[ERROR] 커스텀 구분자의 길이는 0일 수 없습니다."],
    [["//!\\n1:3!4;3"], "[ERROR] 정의되지 않은 구분자가 포함되어 있습니다."],
    [["-2:3,4"], "[ERROR] 숫자는 자연수만 입력할 수 있습니다."],
  ];

  const PASS_INPUTS = [
    [["//!\\n1!2:3"], "결과 : 6"],
    [["//!@\\n1!@2,5"], "결과 : 8"],
    [["1,2"], "결과 : 3"],
  ];

  test.each(ERROR_INPUTS)("문자열 에러 테스트", async (input, message) => {
    mockQuestions(input);

    const app = new App();

    await expect(app.run()).rejects.toThrow(message);
  });

  test.each(PASS_INPUTS)("문자열 통과 테스트", async (input, message) => {
    mockQuestions(input);

    const logSpy = getLogSpy();
    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
  });
});
