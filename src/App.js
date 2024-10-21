import { Console } from "@woowacourse/mission-utils";

class StringCalculator {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    const result = this.add(input);
    Console.print(`결과 : ${result}`);
  }

  add(input) {
    if (!input) throw new Error("[ERROR] 입력이 잘못되었습니다.");
    
    const { numbers, delimiters } = this.parseInput(input);
    const numberList = this.splitNumbers(numbers, delimiters);

    this.validateNumbers(numberList);

    return this.sumNumbers(numberList);
  }

  parseInput(input) {
    // 커스텀 구분자 처리: //;\n 형식
    const customDelimiterMatch = input.match(/^\/\/(.)\\n(.*)$/);
    if (customDelimiterMatch) {
      return {
        delimiters: [customDelimiterMatch[1], ",", ":"], // 커스텀 구분자와 기본 구분자 함께 사용
        numbers: customDelimiterMatch[2], // 구분자 이후의 숫자들
      };
    }

    // 커스텀 구분자가 없으면 기본 구분자 쉼표(,)와 콜론(:)만 사용
    return {
      delimiters: [",", ":"],
      numbers: input,
    };
  }

  splitNumbers(numbers, delimiters) {
    // 입력된 구분자를 모두 적용하여 숫자 분리
    const delimiterPattern = new RegExp(`[${delimiters.join("")}]`);
    const splitNumbers = numbers.split(delimiterPattern).filter((num) => num.trim() !== "");
    
    // 비어 있는 값이 있거나 숫자가 아닌 값이 있으면 예외 발생
    if (splitNumbers.some(num => isNaN(num) || num.trim() === "")) {
      throw new Error("[ERROR] 잘못된 입력입니다. 숫자만 입력하세요.");
    }

    return splitNumbers.map(Number);  // 숫자로 변환
  }

  validateNumbers(numberList) {
    numberList.forEach((num) => {
      if (isNaN(num) || num < 0) {
        throw new Error("[ERROR] 잘못된 입력입니다. 양수를 입력하세요.");
      }
    });
  }

  sumNumbers(numberList) {
    return numberList.reduce((sum, num) => sum + num, 0);  // 숫자 합계 계산
  }
}

export default StringCalculator;
