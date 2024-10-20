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
    const customDelimiterMatch = input.match(/^\/\/(.*?)\n/); // 구분자 확인
    let delimiters = [...this.defaultDelimiters]; // 구분자 배열을 기본 구분자로 초기화

    // 커스텀 구분자가 있는 경우
    if (customDelimiterMatch) {
      const customDelimiters = customDelimiterMatch[1].trim().split(/[,]/); // 쉼표로 구분하여 배열로 변환

      customDelimiters.forEach((delimiter) => {
        // 구분자가 없거나 이미 정의된 구분자이거나 숫자인 경우 예외처리
        if (
          delimiter.length !== 1 ||
          !isNaN(delimiter) ||
          delimiters.includes(delimiter)
        ) {
          throw new Error(Errors.WRONG_DELIMETER);
        }
        delimiters.push(delimiter);
      });

      // 나머지 숫자 추출
      const numbers = input.split("\n").slice(1).join("\n");
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

    // 예외 처리: 연속된 구분자에 의해 빈 문자열이 생성된 경우
    splitNumbers.forEach((num, index) => {
      if (num === "") {
        throw new Error(Errors.WRONG_DELIMETER);
      }
    });

    // 예외 처리: 숫자 형식이 잘못된 경우
    return splitNumbers.map((num) => {
      const number = Number(num);
      if (isNaN(number) || number > Number.MAX_VALUE) {
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
    // 예외 처리: 문자열이 비어있거나 null, undefined인 경우
    this.isEmpty(input);

    // 구분자 배열과 숫자 부분 추출
    const { delimiters, numbers } = this.checkDelimiter(input);

    // 구분자에 따라 숫자 부분을 각각 숫자 배열로 분리
    const numArray = this.parseNumbers(numbers, delimiters);
    this.checkNegativeNumbers(numArray);

    // 합 구하기
    return numArray.reduce((acc, cur) => acc + cur, 0);
  }
}

export default Calculator;
