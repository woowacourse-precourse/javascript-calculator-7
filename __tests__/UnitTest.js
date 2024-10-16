import { parseUserInput, extractCustomSeparators } from "../src/utils";

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

describe("커스텀 문자열에서 커스텀 구분자를 추출한다.", () => {
  test("커스텀 문자열이 없다면 빈 배열을 리턴합니다.", () => {
    const customString = "";
    const customSeparators = extractCustomSeparators(customString);
    expect(customSeparators).toEqual([]);
  });

  test("커스텀 문자열 //abc\n는 커스텀 구분자 ['abc']와 같습니다.", () => {
    const customString = "//abc\n";
    const customSeparators = extractCustomSeparators(customString);
    expect(customSeparators).toEqual(["abc"]);
  });

  test("커스텀 문자열 //a\n//b\n는 커스텀 구분자 ['a\n//b']와 같습니다.", () => {
    const customString = "//a\n//b\n";
    const customSeparators = extractCustomSeparators(customString);
    expect(customSeparators).toEqual(["a\n//b"]);
  });

  test("커스텀 구분자가 숫자 형식이라면 구분자에 포함되지 않습니다.", () => {
    const customString = "//1\n//2\n";
    const customSeparators = extractCustomSeparators(customString);
    expect(customSeparators).toEqual([]);
  });

  test("커스텀 문자열이 형식에 맞지 않다면 구분자에 포함되지 않습니다.", () => {
    const customString1 = "//\n";
    const customSeparators1 = extractCustomSeparators(customString1);
    expect(customSeparators1).toEqual([]);

    const customString2 = "///n";
    const customSeparators2 = extractCustomSeparators(customString2);
    expect(customSeparators2).toEqual([]);
  });
});
