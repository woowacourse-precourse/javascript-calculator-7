import Errors from "./error.js";

class Calculator {
  constructor() {
    this.defaultDelimiters = [",", ":"];
  }

  // 문자열이 비어있는 경우 예외처리
  isEmpty(input) {
    const trimmedInput = input.trim();
    if (trimmedInput.length < 1) {
      throw new Error(Errors.EMPTY_INPUT);
    }
  }

  // 구분자 확인하고 구분자 배열에 삽입

  checkDelimiter(input) {
    let delimiters = [...this.defaultDelimiters]; // 구분자 배열을 기본 구분자로 초기화

    // 커스텀 구분자가 있는지 확인
    if (input.startsWith("//")) {
      const delimiterEndIndex = input.indexOf("\n");

      if (delimiterEndIndex === -1) {
        // "\n"이 없는 경우 예외 처리
        throw new Error(Errors.INVALID_FORMAT);
      }

      // "//"와 "\n" 사이의 문자를 커스텀 구분자로 추출
      const customDelimiter = input.substring(2, delimiterEndIndex);

      // 커스텀 구분자가 숫자이거나 이미 존재하는 구분자인 경우 예외 처리
      if (!isNaN(customDelimiter) || delimiters.includes(customDelimiter)) {
        throw new Error(Errors.INVALID_FORMAT);
      }

      // 커스텀 구분자 배열에 추가
      delimiters.push(customDelimiter);

      // "\n" 이후의 숫자가 될 문자열 부분을 추출
      const numbers = input.substring(delimiterEndIndex + 1);
      return { delimiters, numbers };
    }

    return { delimiters, numbers: input };
  }

  // 숫자 추출
  parseNumbers(numbers, delimiters) {
    let splitNumbers = [numbers];

    // 각 delimiter에 대해 split
    for (const delimiter of delimiters) {
      splitNumbers = splitNumbers.reduce((acc, part) => {
        return acc.concat(part.split(delimiter)); // split 배열들을 하나로 배열로 합치기
      }, []);
    }

    // 예외 처리: 숫자가 아니거나 비정상적인 값, 너무 큰 값이 있는 경우
    return splitNumbers.map((num) => {
      const number = Number(num.trim()); // 공백 제거 후 숫자로 변환
      if (
        num.trim() === "" ||
        isNaN(number) ||
        number > Number.MAX_SAFE_INTEGER
      ) {
        throw new Error(Errors.INVALID_FORMAT);
      }
      return number;
    });
  }

  // 예외처리: 숫자 중 음수가 있는 경우
  checkNegativeNumbers(numArray) {
    const negatives = numArray.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error(Errors.NEGATIVE_NUMBERS);
    }
  }

  calculate(input) {
    this.isEmpty(input); // 입력이 비어있는 경우 처리

    // 구분자와 숫자 분리
    const { delimiters, numbers } = this.checkDelimiter(input);

    // 구분자를 이용해 배열로 변환
    const numArray = this.parseNumbers(numbers, delimiters);

    // 음수가 있는지 확인
    this.checkNegativeNumbers(numArray);

    // 합 구하기
    return numArray.reduce((acc, cur) => acc + cur, 0);
  }
}

export default Calculator;
