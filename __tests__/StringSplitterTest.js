import Calculator from "../src/Calculator";
import { mockQuestions } from "./ApplicationTest";

describe("문자열 구분", () => {
  test("커스텀 구분자 설정 부분이 없을 때 false를 반환하는 지 확인", async () => {
    const input = "//;\\1";
    mockQuestions(input);

    const output = false;

    const cal = new Calculator(input);

    const result = cal.hasCustomDelimiter();
    expect(result).toBe(output);
  });

  test("커스텀 구분자 설정 부분이 있을 때 true를 반환하는 지 확인", async () => {
    const input = "//;\\n1";
    mockQuestions(input);

    const output = true;
    const cal = new Calculator(input);

    const result = cal.hasCustomDelimiter();
    expect(result).toBe(output);
  });

  test("입력 문자열을 쉼표 또는 콜론을 기준으로 분리한다.", async () => {
    const input = "1,2;3";
    mockQuestions(input);

    const output = [1, 2, 3];
    const cal = new Calculator(input);

    const result = cal.separator();
    expect(result).toEqual(output);
  });
});
