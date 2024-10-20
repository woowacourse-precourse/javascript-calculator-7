import splitNumber from "../src/utils/splitNumber.js";
import validateNumber from "../src/utils/validateNumber.js";
import { ERROR_MESSAGES } from "../src/constants/errorMessages.js";

describe("문자열 계산기 테스트", () => {
  describe("splitNumber 함수 테스트", () => {
    test("빈 문자열 입력 시 [0]을 반환한다", () => {
      expect(splitNumber("")).toEqual([0]);
    });

    test("기본 구분자(쉼표, 콜론)로 문자열을 분할한다", () => {
      expect(splitNumber("1,2:3")).toEqual(["1", "2", "3"]);
    });

    test("커스텀 구분자를 사용하여 문자열을 분할한다", () => {
      expect(splitNumber("//;\n1;2;3")).toEqual(["1", "2", "3"]);
    });

    test("커스텀 구분자가 빈 문자열일 경우 에러를 던진다", () => {
      expect(() => splitNumber("//\n1,2,3")).toThrow(
        ERROR_MESSAGES.EMPTY_DELIMITER
      );
    });

    test("커스텀 구분자가 숫자일 경우 에러를 던진다", () => {
      expect(() => splitNumber("//1\n1,2,3")).toThrow(
        ERROR_MESSAGES.INVALID_SPLITTER
      );
    });
  });

  describe("validateNumber 함수 테스트", () => {
    test("유효한 양의 정수를 파싱한다", () => {
      expect(validateNumber("5")).toBe(5);
    });

    test("0을 유효한 입력으로 처리한다", () => {
      expect(validateNumber("0")).toBe(0);
    });

    test("음수 입력 시 에러를 던진다", () => {
      expect(() => validateNumber("-1")).toThrow(
        ERROR_MESSAGES.NOT_POSITIVE_NUMBER
      );
    });

    test("숫자가 아닌 문자열 입력 시 에러를 던진다", () => {
      expect(() => validateNumber("abc")).toThrow(ERROR_MESSAGES.NOT_A_NUMBER);
    });
  });

  describe("전체 프로세스 테스트", () => {
    const processInput = (input) => {
      const numbers = splitNumber(input).map(validateNumber);
      return numbers.reduce((acc, cur) => acc + cur, 0);
    };

    test("기본 구분자를 사용한 입력 처리", () => {
      expect(processInput("1,2:3")).toBe(6);
    });

    test("커스텀 구분자를 사용한 입력 처리", () => {
      expect(processInput("//;\n1;2;3")).toBe(6);
    });

    test("빈 문자열 입력 처리", () => {
      expect(processInput("")).toBe(0);
    });

    test("음수 포함 시 에러 처리", () => {
      expect(() => processInput("1,2,-3")).toThrow(
        ERROR_MESSAGES.NOT_POSITIVE_NUMBER
      );
    });
  });
});
