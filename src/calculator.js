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

  // 유효한 구분자인지 확인
  isValidDelimiter(delimiter) {
    return (
      typeof delimiter === "string" && delimiter.length > 0 && isNaN(delimiter) // 문자열이면서 숫자가 아닌 경우
    );
  }

  // 커스텀 구분자가 존재하는지 확인
  hasCustomDelimiter(input) {
    return input.startsWith("//");
  }

  // 커스텀 구분자의 개수를 확인하고 반환
  getCustomDelimiters(input) {
    const delimiterEndIndex = input.indexOf("\n");
    if (delimiterEndIndex === -1) {
      throw new Error(Errors.INVALID_FORMAT);
    }
    const customDelimiterSection = input.substring(2, delimiterEndIndex);
    if (customDelimiterSection.length === 0) {
      throw new Error(Errors.INVALID_FORMAT);
    }
    return customDelimiterSection;
  }

  // 구분자를 배열에 추가
  addCustomDelimiters(delimiterSection, delimiters) {
    const customDelimiters = delimiterSection.split(",");
    for (const delimiter of customDelimiters) {
      const trimmedDelimiter = delimiter.trim(); // 공백 제거
      if (
        !this.isValidDelimiter(trimmedDelimiter) ||
        delimiters.includes(trimmedDelimiter) ||
        this.defaultDelimiters.includes(trimmedDelimiter)
      ) {
        throw new Error(Errors.INVALID_FORMAT);
      }
      delimiters.push(trimmedDelimiter);
    }
  }

  checkDelimiter(input) {
    let delimiters = [...this.defaultDelimiters]; // 구분자 배열을 기본 구분자로 초기화

    // 커스텀 구분자가 있는지 확인
    if (this.hasCustomDelimiter(input)) {
      const customDelimiterSection = this.getCustomDelimiters(input);

      // 커스텀 구분자 추가
      this.addCustomDelimiters(customDelimiterSection, delimiters);

      // "\n" 이후의 숫자가 될 문자열 부분을 추출
      const numbers = input.substring(input.indexOf("\n") + 1);
      if (!numbers) throw new Error(Errors.INVALID_FORMAT); // 숫자가 없을 경우 예외 처리
      return { delimiters, numbers };
    }

    const numbers = input; // 커스텀 구분자가 없는 경우
    return { delimiters, numbers };
  }

  // 숫자 추출
  parseNumbers(numbers, delimiters) {
    let splitNumbers = [numbers];

    // 각 delimiter에 대해 split
    for (const delimiter of delimiters) {
      splitNumbers = splitNumbers.flatMap((part) => part.split(delimiter)); // 모든 배열을 하나의 배열에 합치기
    }
    // 숫자 형변환 및 유효성 검사
    return splitNumbers
      .filter((num) => num.trim() !== "")
      .map((num) => {
        const number = Number(num);
        if (isNaN(number)) throw new Error(Errors.INVALID_FORMAT); // 숫자가 아닌 경우 예외 처리
        return number;
      });
  }

  // 예외 처리: 숫자 유효성 검사
  checkValidateNumbers(numArray) {
    numArray.forEach((num) => {
      if (num < 0) {
        throw new Error(Errors.NEGATIVE_NUMBERS);
      }
      if (num > Number.MAX_SAFE_INTEGER) {
        throw new Error(Errors.INVALID_FORMAT);
      }
    });
  }

  // 입력 정규화: 이스케이프 \\n => \n로 변환 및 \n을 실제로 변환
  normalizeInput(input) {
    return input.replace(/\\\\n/g, "\n").replace(/\\n/g, "\n");
  }

  calculate(input) {
    input = this.normalizeInput(input);

    this.isEmpty(input);

    // 구분자와 숫자 분리
    const { delimiters, numbers } = this.checkDelimiter(input);

    // 구분자를 이용해 배열로 변환
    const numArray = this.parseNumbers(numbers, delimiters);

    // 배열 내 숫자 유효성 검사
    this.checkValidateNumbers(numArray);

    // 합 구하기
    return numArray.reduce((acc, cur) => acc + cur, 0);
  }
}

export default Calculator;
