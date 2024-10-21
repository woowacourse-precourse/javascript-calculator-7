import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Calculator from "../src/Model/Calculator.js";
import InputParser from "../src/Model/InputParser.js";
import { ERROR_MESSAGES } from "../src/constants.js";

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

describe("문자열 계산기 통합 테스트", () => {
  test("쉼표를 구분자로 사용하여 입력된 숫자의 합을 계산한다", async () => {
    const inputs = ["1,2,3"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("결과 : 6"));
  });

  test("콜론을 구분자로 사용하여 입력된 숫자의 합을 계산한다", async () => {
    const inputs = ["1:2:3"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("결과 : 6"));
  });

  test("쉼표와 콜론을 혼합하여 구분자로 사용한 경우 숫자의 합을 계산한다", async () => {
    const inputs = ["1,2:3,4:5"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("결과 : 15"));
  });

  test("커스텀 구분자를 사용하여 입력된 숫자의 합을 계산한다", async () => {
    const inputs = ["//@\\n1@2@3"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("결과 : 6"));
  });

  test("빈 문자열 입력 시 결과 값으로 0을 반환한다", async () => {
    const inputs = [""];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("결과 : 0"));
  });

  test("유효하지 않은 구분자 사용 시 예외를 발생시킨다", async () => {
    const inputs = ["1+2+3"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGES.NO_VALID_DIVIDER)
    );
  });

  test("커스텀 구분자 정의 후 숫자를 입력하지 않은 경우 예외를 발생시킨다", async () => {
    const inputs = ["//;\\n"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGES.NO_NUMBERS_INPUT)
    );
  });

  test("음수를 입력한 경우 예외를 발생시킨다", async () => {
    const inputs = ["-1,2,3"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGES.NEGATIVE_NUMBER)
    );
  });

  test("숫자가 아닌 값을 입력한 경우 예외를 발생시킨다", async () => {
    const inputs = ["1,a,3"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGES.INVALID_INPUT)
    );
  });
});

describe("Calculator 단위 테스트", () => {
  test("숫자 배열의 합을 정확히 계산한다", () => {
    const calculator = new Calculator();
    expect(calculator.calculate([1, 2, 3])).toBe(6);
    expect(calculator.calculate([10, 20, 30, 40])).toBe(100);
    expect(calculator.calculate([0, 0, 0])).toBe(0);
  });
});

describe("InputParser 단위 테스트", () => {
  const parser = new InputParser();

  test("쉼표로 구분된 입력을 정확히 파싱한다", () => {
    expect(parser.parse("1,2,3")).toEqual([1, 2, 3]);
  });

  test("콜론으로 구분된 입력을 정확히 파싱한다", () => {
    expect(parser.parse("1:2:3")).toEqual([1, 2, 3]);
  });

  test("쉼표와 콜론이 혼합된 입력을 정확히 파싱한다", () => {
    expect(parser.parse("1,2:3,4:5")).toEqual([1, 2, 3, 4, 5]);
  });

  test("커스텀 구분자를 정확히 파싱한다", () => {
    expect(parser.parse("//@\\n1@2@3")).toEqual([1, 2, 3]);
  });

  test("빈 문자열 입력 시 [0]을 반환한다", () => {
    expect(parser.parse("")).toEqual([0]);
  });

  test("유효하지 않은 구분자 사용 시 예외를 발생시킨다", () => {
    expect(() => parser.parse("1+2+3")).toThrow(
      ERROR_MESSAGES.NO_VALID_DIVIDER
    );
  });

  test("커스텀 구분자 정의 후 숫자를 입력하지 않은 경우 예외를 발생시킨다", () => {
    expect(() => parser.parse("//;\\n")).toThrow(
      ERROR_MESSAGES.NO_NUMBERS_INPUT
    );
  });

  test("음수를 입력한 경우 예외를 발생시킨다", () => {
    expect(() => parser.parse("-1,2,3")).toThrow(
      ERROR_MESSAGES.NEGATIVE_NUMBER
    );
  });

  test("숫자가 아닌 값을 입력한 경우 예외를 발생시킨다", () => {
    expect(() => parser.parse("1,a,3")).toThrow(ERROR_MESSAGES.INVALID_INPUT);
  });
});
