import { parseUserInput } from "../src/utils";

describe("사용자 입력을 커스텀 문자열과 숫자 문자열로 나눈다.", () => {
  const userInput = "//;\n1;2;3";
  const { customString, numberString } = parseUserInput(userInput);

  test("커스텀 문자열은 //;\n 이다.", () => {
    expect(customString).toBe("//;\n");
  });

  test("숫자 문자열은 1;2;3 이다.", () => {
    expect(numberString).toBe("1;2;3");
  });
});
