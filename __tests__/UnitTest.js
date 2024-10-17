import { parseUserInput, extractCustomSeparators, replaceAllPattern } from "../src/utils";

describe("문자열의 특정 패턴을 바꾸고 싶은 문자열로 모두 바꾼다.", () => {
  test("\\n를 모두 \n로 변환한다.", () => {
    const string = "//;\\n\\n";
    const newString = replaceAllPattern(string, "\\n", "\n");

    expect(newString).toBe("//;\n\n");
  });

  test("a를 모두 b로 변환한다.", () => {
    const string = "a//a\na";
    const newString = replaceAllPattern(string, "a", "b");

    expect(newString).toBe("b//b\nb");
  });
});

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
