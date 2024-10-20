import { sumNumberList } from "../src/features/sumNumberList.js";
import { ERROR_CONFIG } from "../src/config/errorConfig.js";

describe("sumNumberList 테스트", () => {
  beforeEach(() => {
    ERROR_CONFIG.INVALID_VALUE = "잘못된 값입니다.";
  });

  test("합을 반환하는 지 확인", () => {
    const INPUT = [1, 2, 3];
    const EXPECTED = 6;
    expect(sumNumberList(INPUT)).toEqual(EXPECTED);
  });

  test("숫자가 아닐 때 에러를 반환하는 지 확인", () => {
    const INPUT = [1, "n", 3];
    expect(() => sumNumberList(INPUT)).toThrow(ERROR_CONFIG.INVALID_VALUE);
  });

  test("빈 배열일 때 에러를 반환하는 지 확인", () => {
    const INPUT = [];
    expect(() => sumNumberList(INPUT)).toThrow(ERROR_CONFIG.INVALID_VALUE);
  });
});