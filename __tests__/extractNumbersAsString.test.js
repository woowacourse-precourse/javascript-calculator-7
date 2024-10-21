import { extractNumbersAsString } from "../src/features/extractNumbersAsString.js";
import { DELIMITER_CONFIG } from "../src/config/delimiterConfig.js";

describe("extractNumbersAsString 테스트", () => {
  beforeEach(() => {
    // 기본 구분자 설정
    DELIMITER_CONFIG.DEFAULT = [",", ":"];
    DELIMITER_CONFIG.START = "//";
    DELIMITER_CONFIG.END = "\n";
  });

  test("빈 문자열일 때 ['0']을 반환하는 지 확인", () => {
    expect(extractNumbersAsString("")).toEqual(["0"]);
  });

  test("기본 구분자를 처리하는 지 확인", () => {
    const input = "1,2,3";
    const expected = ["1", "2", "3"];
    expect(extractNumbersAsString(input)).toEqual(expected);
  });

  test("커스텀 구분자를 처리하는 지 확인", () => {
    const input = "//;\n1;2;3";
    const expected = ["1", "2", "3"];
    expect(extractNumbersAsString(input)).toEqual(expected);
  });

  test("구분자가 없는 경우 확인", () => {
    const input = "12345";
    const expected = ["12345"];
    expect(extractNumbersAsString(input)).toEqual(expected);
  });

  test("숫자가 없는 경우 확인", () => {
    const input = "//;\na;b;c";
    const expected = ["a", "b", "c"];
    expect(extractNumbersAsString(input)).toEqual(expected);
  });
});
