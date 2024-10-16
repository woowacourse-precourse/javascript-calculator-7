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

const runCalcualatorTest = async (input, output) => {
  const inputs = [input];
  const outputs = [`결과 : ${output}`];
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();
  await app.run();
  outputs.forEach((output) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
};

describe("문자열 계산기", () => {
  describe("커스텀 구분자 사용", () => {
    test("숫자 1개 입력", async () => {
      await runCalcualatorTest("//;\\n1", "1");
    });
    test("숫자 1개 입력 (다른 형식)", async () => {
      await runCalcualatorTest("//;\n1", "1");
    });
    test("숫자 3개 입력", async () => {
      await runCalcualatorTest("//v\n1v2v3", "6");
    });
    test("숫자 10개 입력", async () => {
      await runCalcualatorTest("//;\n1;2;3;4;5;6;7;8;9;10", "55");
    });
    test("두 자리 이상 숫자로 5개 입력", async () => {
      await runCalcualatorTest("//;\\n10;20;30;40;50", "150");
    });
  });

  describe("기본 구분자 사용", () => {
    test("숫자 1개 입력", async () => {
      await runCalcualatorTest("1", "1");
    });
    test("숫자 3개 입력", async () => {
      await runCalcualatorTest("1,2:3", "6");
    });
    test("숫자 10개 입력", async () => {
      await runCalcualatorTest("1,2:3,4:5,6:7,8:9,10", "55");
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
