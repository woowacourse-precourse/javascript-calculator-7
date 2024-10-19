import StringCalculator from "../src/StringCalculator";

describe("StringCalculator", () => {
  describe("checkEmptyInput", () => {
    test("빈 문자열이 입력되면 에러를 발생시킨다", () => {
      const calculator = new StringCalculator();
      expect(() => calculator.checkEmptyInput("")).toThrow(
        "[ERROR] 입력값이 빈 문자열입니다."
      );
    });
  });

  describe("extractCustomDelimiter", () => {
    test("커스텀 구분자를 추출한다", () => {
      const calculator = new StringCalculator();
      expect(calculator.extractCustomDelimiter("//;\\n1;2;3")).toBe(";");
    });

    test("커스텀 구분자가 없으면 null을 반환한다", () => {
      const calculator = new StringCalculator();
      expect(calculator.extractCustomDelimiter("1,2:3")).toBe(null);
    });
  });

  describe("getNumberSection", () => {
    test("커스텀 구분자를 사용하여 숫자 섹션을 반환한다", () => {
      const calculator = new StringCalculator();
      expect(calculator.getNumberSection("//;\\n1;2;3", ";")).toBe("1;2;3");
    });

    test("기본 구분자를 사용하여 입력값을 그대로 반환한다", () => {
      const calculator = new StringCalculator();
      expect(calculator.getNumberSection("1,2:3", null)).toBe("1,2:3");
    });
  });

  describe("checkInvalidCharacters", () => {
    test("허용되지 않는 문자가 포함된 경우 에러를 발생시킨다", () => {
      const calculator = new StringCalculator();
      expect(() => calculator.checkInvalidCharacters("1,a,3", null)).toThrow(
        "[ERROR] 입력값에 허용되지 않는 문자가 포함되어 있습니다."
      );
      expect(() => calculator.checkInvalidCharacters("1;a;3", ";")).toThrow(
        "[ERROR] 입력값에 허용되지 않는 문자가 포함되어 있습니다."
      );
      expect(() => calculator.checkInvalidCharacters("1,2,3", ";")).toThrow(
        "[ERROR] 입력값에 허용되지 않는 문자가 포함되어 있습니다."
      );
    });

    test("정상적인 입력일 경우 에러가 발생하지 않는다", () => {
      const calculator = new StringCalculator();
      expect(() =>
        calculator.checkInvalidCharacters("1,2:3", null)
      ).not.toThrow();
      expect(() =>
        calculator.checkInvalidCharacters("1;2;3", ";")
      ).not.toThrow();
      expect(() =>
        calculator.checkInvalidCharacters("1+2+3", "+")
      ).not.toThrow();
    });
  });

  describe("checkDelimiterUsage", () => {
    test("구분자 사이에 숫자가 없으면 에러를 발생시킨다", () => {
      const calculator = new StringCalculator();
      expect(() => calculator.checkDelimiterUsage(["1", "", "2"])).toThrow(
        "[ERROR] 구분자가 잘못 사용되었습니다."
      );
    });

    test("구분자가 올바르게 사용되면 에러가 발생하지 않는다", () => {
      const calculator = new StringCalculator();
      expect(() =>
        calculator.checkDelimiterUsage(["1", "2", "3"])
      ).not.toThrow();
    });
  });

  describe("splitNumbers", () => {
    test("커스텀 구분자를 사용하여 문자열을 나누고 숫자 배열을 반환한다", () => {
      const calculator = new StringCalculator();
      expect(calculator.splitNumbers("1;2;3", ";")).toEqual([1, 2, 3]);
    });

    test("기본 구분자를 사용하여 문자열을 나누고 숫자 배열을 반환한다", () => {
      const calculator = new StringCalculator();
      expect(calculator.splitNumbers("1,2:3", null)).toEqual([1, 2, 3]);
    });
  });

  describe("calculateSum", () => {
    test("숫자 배열을 합산하여 결과를 반환한다", () => {
      const calculator = new StringCalculator();
      expect(calculator.calculateSum([1, 2, 3])).toBe(6);
    });

    test("빈 배열이 주어지면 0을 반환한다", () => {
      const calculator = new StringCalculator();
      expect(calculator.calculateSum([])).toBe(0);
    });
  });

  describe("parseAndAdd", () => {
    test("기본 구분자로 문자열을 더한 결과를 반환한다", () => {
      const calculator = new StringCalculator();
      expect(calculator.parseAndAdd("1,2:3")).toBe(6);
      expect(calculator.parseAndAdd("1,2,3")).toBe(6);
      expect(calculator.parseAndAdd("1:2:3")).toBe(6);
    });

    test("커스텀 구분자로 문자열을 더한 결과를 반환한다", () => {
      const calculator = new StringCalculator();
      expect(calculator.parseAndAdd("//;\\n1;2;3")).toBe(6);
      expect(calculator.parseAndAdd("//;\\n1")).toBe(1);
    });

    test("빈 문자열이 입력되면 에러가 발생한다", () => {
      const calculator = new StringCalculator();
      expect(() => calculator.parseAndAdd("")).toThrow(
        "[ERROR] 입력값이 빈 문자열입니다."
      );
    });

    test("허용되지 않는 문자가 포함된 경우 에러를 발생시킨다", () => {
      const calculator = new StringCalculator();
      expect(() => calculator.parseAndAdd("1,a,3")).toThrow(
        "[ERROR] 입력값에 허용되지 않는 문자가 포함되어 있습니다."
      );
    });

    test("음수가 포함된 경우 에러를 발생시킨다", () => {
      const calculator = new StringCalculator();
      expect(() => calculator.parseAndAdd("1,-2,3")).toThrow(
        "[ERROR] 음수는 입력할 수 없습니다."
      );
      expect(() => calculator.parseAndAdd("//;\\n1;-2;3")).toThrow(
        "[ERROR] 음수는 입력할 수 없습니다."
      );
    });
  });
});
