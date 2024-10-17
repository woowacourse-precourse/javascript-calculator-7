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

const runCalculatorTest = async (input, output) => {
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
    describe("커스텀 구분자 1개", () => {
      test("숫자 1개 입력", async () => {
        await runCalculatorTest("//;\n1", "1");
      });
      test("숫자 3개 입력", async () => {
        await runCalculatorTest("//v\n1v23v456", "480");
      });
    });
    describe("커스텀 구분자 2개", () => {
      test("숫자 1개 입력", async () => {
        await runCalculatorTest("//;v\n1", "1");
      });
      test("숫자 3개 입력", async () => {
        await runCalculatorTest("//;v\n1v23;456", "480");
      });
    });
    describe("특수한 구분자 2개", () => {
      test("숫자 1개 입력", async () => {
        await runCalculatorTest("//;v\b\n1", "1");
      });
      test("숫자 3개 입력", async () => {
        await runCalculatorTest("//;v\b\n1\\23b456", "480");
      });
      test("중복된 특수한 구분자 & 숫자 3개 입력", async () => {
        await runCalculatorTest("//;vv\n1v23v456", "480");
      });
    });
  });

  describe("기본 구분자 사용", () => {
    test("빈 문자열 입력", async () => {
      await runCalculatorTest("", "0");
    });
    test("숫자 1개 입력", async () => {
      await runCalculatorTest("1", "1");
    });
    test("숫자 3개 입력", async () => {
      await runCalculatorTest("1,2:3", "6");
    });
    test("숫자 10개 입력", async () => {
      await runCalculatorTest("1,2:3,4:5,6:7,8:9,10", "55");
    });
  });

  describe("예외 테스트", () => {
    test("음수 입력", async () => {
      const inputs = ["-1,2,3"];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow("[ERROR]");
    });
    test("기본 구분자 외의 구분자 사용", async () => {
      const inputs = ["1\\2"];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow("[ERROR]");
    });
    test("커스텀 구분자 외의 구분자 사용", async () => {
      const inputs = ["\\;\n1,2"];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow("[ERROR]");
    });
    test("숫자 외의 문자 입력", async () => {
      const inputs = ["\\;\na"];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow("[ERROR]");
    });
  });
});
