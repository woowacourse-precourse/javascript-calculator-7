import App from "../src/App";
import Calculator from "../src/Calculator";
import { mockQuestions } from "./ApplicationTest";

describe("문자열 구분", () => {
  test("커스텀 구분자 설정 부분이 없을 때 false를 반환하는 지 확인", async () => {
    const input = "//;\\1";

    const output = false;

    const cal = new Calculator(input);

    const result = cal.hasCustomDelimiter();
    expect(result).toBe(output);
  });

  test("커스텀 구분자 설정 부분이 있을 때 true를 반환하는 지 확인", async () => {
    const input = "//;\\n1";

    const output = true;
    const cal = new Calculator(input);

    const result = cal.hasCustomDelimiter();
    expect(result).toBe(output);
  });

  test("커스텀 구분자 설정 부분이 있다면 커스텀 구분자를 구분자 리스트에 추가한다.", async () => {
    const input = "//[\\n1,2:3";

    const output = [",", ":", "["];
    const cal = new Calculator(input);

    cal.addCustomDelimiter();
    expect(cal.delimiters).toEqual(output);
  });

  test("입력 문자열을 쉼표 또는 콜론을 기준으로 분리한다.", async () => {
    const input = "1,2:3";

    const output = [1, 2, 3];
    const cal = new Calculator(input);

    const result = cal.separator();
    expect(result).toEqual(output);
  });

  test("입력 문자열을 쉼표 또는 콜론 또는 커스텀 구분자를 기준으로 분리한다.", async () => {
    const input = "//[\\n1,2:3[4";

    const output = [1, 2, 3, 4];
    const cal = new Calculator(input);

    const result = cal.separator();
    expect(result).toEqual(output);
  });

  test("분리된 문자열이 숫자가 아닐 경우, 예외 테스트", async () => {
    const inputs = ["a,2,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
