import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("문자열 계산기", () => {
  test.each([
    ['//;\\n1', '결과 : 1'],
    ['1,2:3', '결과 : 6'],
    ['//;\\n1;2;3', '결과 : 6'],
    ['//a\\n1a2a3a4a5', '결과 : 15'],
    ['//1\\n2131415', '결과 : 14'],
    ['1,2,+3,+4,5', '결과 : 15'],
    ['//;\\n//;\\n1;2;3', '결과 : 6'],
    ['123,456', '결과 : 579'],
    ['123', '결과 : 123'],
  ])("커스텀 구분자 사용", async (input, output) => {
    mockQuestions(input);

    const logSpy = getLogSpy();

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });

  test.each(['-1,2,3', '//\\n1,2,3', '1,2,3a,4d,5', '1,,,,2,,,,3', '1,2,+3,-4', '1,2,++3', '', '\n', '!', '/', '1//;\\n//-\\n;2-3', '1////\\n2'])(
    "예외 테스트",
    async (input) => {
      mockQuestions(input);

      const app = new App();

      await expect(app.run()).rejects.toThrow("[ERROR]");
    });
});
