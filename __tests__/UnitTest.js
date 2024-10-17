import {
  parseUserInput,
  extractCustomSeparators,
  replaceAllPattern,
  assertCondition,
  isValidCustomSeparator,
  isAllPositive,
  sumNumbers,
} from "../src/utils";
import { MESSAGES } from "../src/constants";

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

describe("유효성 검사들을 테스트한다.", () => {
  test("커스텀 문자열이 커스텀 형식에 맞지 않다면 false를 반환한다.", () => {
    const customString = "//1\n";
    const customSeparators = extractCustomSeparators(customString);

    expect(isValidCustomSeparator(customString, customSeparators)).toBeFalsy();
  });

  test("커스텀 문자열이 커스텀 형식에 맞다면 true를 반환한다.", () => {
    const customString = "//a\n";
    const customSeparators = extractCustomSeparators(customString);

    expect(isValidCustomSeparator(customString, customSeparators)).toBeTruthy();
  });

  test("숫자 배열에 음수가 포함되어 있다면 false를 반환한다.", () => {
    const numbers = [0, 1, 2, 3];

    expect(isAllPositive(numbers)).toBeFalsy();
  });

  test("숫자 배열이 모두 양수라면 true를 반환한다.", () => {
    const numbers = [1, 2, 3];

    expect(isAllPositive(numbers)).toBeTruthy();
  });

  test("인자로 받은 조건식이 true라면 예외 처리가 발생한다.", () => {
    const numbers = [0, 1, 2, 3];

    expect(() => {
      assertCondition(!isAllPositive(numbers), MESSAGES.INVALID_ALL_POSITIVE);
    }).toThrow(MESSAGES.INVALID_ALL_POSITIVE);

    const customString = "//123\n";
    const customSeparators = extractCustomSeparators(customString);

    expect(() => {
      assertCondition(!isValidCustomSeparator(customString, customSeparators), MESSAGES.INVALID_CUSTOM_SEPARATOR);
    }).toThrow(MESSAGES.INVALID_CUSTOM_SEPARATOR);
  });
});

describe("숫자 배열의 모든 원소의 합을 구한다.", () => {
  test("[1, 2, 3]의 모든 원소를 합한 값은 6이다.", () => {
    const numbers = [1, 2, 3];

    expect(sumNumbers(numbers)).toBe(6);
  });

  test("[1, 2, 3, 4, 5]의 모든 원소를 합한 값은 15이다.", () => {
    const numbers = [1, 2, 3, 4, 5];

    expect(sumNumbers(numbers)).toBe(15);
  });
});
