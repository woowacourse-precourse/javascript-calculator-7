import { convertNumberList } from "../src/features/convertNumberList";
import { ERROR_CONFIG } from "../src/config/errorConfig";

describe("convertNumberList 테스트", () => {
  beforeEach(() => {
    ERROR_CONFIG.INVALID_VALUE = "잘못된 값입니다.";
  });

  test("숫자를 반환하는 지 확인", () => {
    const INPUT = ["1", "2", "3"];
    const EXPECTED = [1, 2, 3];
    expect(convertNumberList(INPUT)).toEqual(EXPECTED);
  });

  test("숫자가 아닐 때 에러를 반환하는 지 확인", () => {
    const INPUT = ["1", "n", "3"];
    expect(() => convertNumberList(INPUT)).toThrow(ERROR_CONFIG.INVALID_VALUE);
  });

  test("빈 배열일 때 에러를 반환하는 지 확인", () => {
    const INPUT = [];
    expect(() => convertNumberList(INPUT)).toThrow(ERROR_CONFIG.INVALID_VALUE);
  });
});
