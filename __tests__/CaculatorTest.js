import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Calculator from "../src/Calculator.js";

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
    const inputs = ["//;\\n1;2;3"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 6"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("빈 문자열 입력", async () => { //
    const inputs = ["  "];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 0"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test("커스텀 구분자 사용", async () => {
    const inputs = ["//;\\n1.2,2.4;2.5"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 6.1"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자 사용", async () => {
    const inputs = ["//;\\n1;2;3"];
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
    const inputs = ["//;\\n1;2.1;3"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 6.1"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("예외 테스트: 유효하지 않은 구분자", async () => {
    const inputs = ["//;\\n1*2;3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트: 커스텀 구분자 중복", async () => {
    const inputs = ["//;\\n//]\\n1*2; 3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트: 커스텀 구분자 중복", async () => {
    const inputs = ["//;\\n1;2.1;;3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("undefined", () => {
    const numbers = [2,2,undefined];
    const calculator = new Calculator();

    expect(() => {calculator.addNumbers(numbers)}).toThrow("[ERROR]")
  })
});
