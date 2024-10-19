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
  test("기본 구분자 사용", () => {
    const inputs = ["1:10,100", "1,2,3:4:5:6:7,8,9"];
    const outputs = ["결과 : 111", "결과 : 45"];

    outputs.forEach(async (output) => {
      mockQuestions(inputs);

      const logSpy = getLogSpy();
  
      const app = new App();
      await app.run();

      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자 사용", () => {
    const inputs = ["//;\\n1", "//.\\n1.2.3", "//!@#\\n100!200@300"];
    const outputs = ["결과 : 1", "결과 : 6", "결과 : 600"];

    outputs.forEach(async (output) => {
      mockQuestions(inputs);

      const logSpy = getLogSpy();

      const app = new App();
      await app.run();

      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("예외 테스트", async () => {
    const inputs = ["-1,2,3", "//!\n1,2:3#4", "//&\\1&2&3&4"];
    
    inputs.forEach(async () => {
      mockQuestions(inputs);
  
      const app = new App();

      await expect(app.run()).rejects.toThrow("[ERROR]");
    })
  });
});
