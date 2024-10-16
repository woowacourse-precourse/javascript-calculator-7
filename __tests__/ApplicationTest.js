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
  describe("커스텀 구분자 사용", () => {
    test("숫자 1개 입력", async () => {
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
    test("숫자 1개 입력", async () => {
      const inputs = ["//;\n1"];
      mockQuestions(inputs);

      const logSpy = getLogSpy();
      const outputs = ["결과 : 1"];

      const app = new App();
      await app.run();

      outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });
    test("숫자 3개 입력", async () => {
      const inputs = ["//;\n1;2;3"];
      mockQuestions(inputs);

      const logSpy = getLogSpy();
      const outputs = ["결과 : 6"];

      const app = new App();
      await app.run();

      outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });
    test("숫자 10개 입력", async () => {
      const inputs = ["//;\n1;2;3;4;5;6;7;8;9;10"];
      mockQuestions(inputs);

      const logSpy = getLogSpy();
      const outputs = ["결과 : 55"];

      const app = new App();
      await app.run();

      outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });
    test("두 자리 이상 숫자로 5개 입력", async () => {
      const inputs = ["//;\\n1;2;3;4;5;6;7;8;9;10"];
      mockQuestions(inputs);

      const logSpy = getLogSpy();
      const outputs = ["결과 : 55"];

      const app = new App();
      await app.run();

      outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });
  });
  describe("기본 구분자 사용", () => {
    test("숫자 1개 입력", async () => {
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
  describe("예외 테스트", () => {
    test("음수 입력", async () => {
      const inputs = ["-1,2,3"];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow("[ERROR]");
    });
  });
});
