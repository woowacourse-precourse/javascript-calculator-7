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
  describe("커스텀 구분자 사용", async () => {
    test("숫자 한 개 입력", async () => {
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
  });
  describe("기본 구분자 사용", async () => {
    test("숫자 한 개 입력", async () => {
      const inputs = ["1"];
      mockQuestions(inputs);

      const logSpy = getLogSpy();
      const outputs = ["결과 : 1"];

      const app = new App();
      await app.run();

      outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });
  });
  describe("예외 테스트", async () => {
    test("음수 입력", async () => {
      const inputs = ["-1,2,3"];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow("[ERROR]");
    });
  });
});
