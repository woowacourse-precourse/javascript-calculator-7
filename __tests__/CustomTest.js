import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = inputs => {
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

describe("문자열 계산기 2", () => {
  test.each([
    ["", "결과 : 0"],
    ["   ", "결과 : 0"],
  ])(`빈 문자열 입력, "%s" expect "%s" (%s)`, async (input, output) => {
    mockQuestions([input]);

    const logSpy = getLogSpy();

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });

  test.each([
    ["1;2,3;4", "결과 : 10", "; ,"],
    [" 1; 2; 3; 4 ", "결과 : 10", "공백O"],
  ])(`기본 구분자 사용, "%s" expect "%s" (%s)`, async (input, output) => {
    mockQuestions([input]);

    const logSpy = getLogSpy();

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});
