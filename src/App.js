import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const INPUT_PROMPT = '덧셈할 문자열을 입력해 주세요: ';
    const userInputString = await Console.readLineAsync(INPUT_PROMPT);

    // 아래 함수의 결과에 따른 예외최리
    try {
      const sumResult = this.calculateSum(userInputString);
      Console.print(sumResult);
    } catch (error) {
      Console.print(error.message);
    }
  }

  // 입력 받은 문자열 안의 숫자 합계 계산 (input: string, output: number)
  calculateSum(inputString) {
    // 입력이 비어있으면 0을 반환
    if (inputString === '') {
      return 0;
    }

    const { numbersString, customSeparator } = this.parseInput(inputString);
    const numberArray = this.extractNumbers(numbersString, customSeparator);
    this.validateNumbers(numberArray);

    return numberArray.reduce((total, num) => total + num, 0);
  }

  // 입력 문자열을 파싱하여 숫자 부분과 커스텀 구분자를 추출
  parseInput(inputString) {
    const customSeparatorPattern = /^\/\/(.+)\\n(.+)/;
    const matchResult = inputString.match(customSeparatorPattern);
    if (matchResult) {
      return {
        numbersString: matchResult[2],
        customSeparator: matchResult[1],
      };
    }
    return { numbersString: inputString, customSeparator: null };
  }

  // 기본 구분자 쉼표(,)와 콜론(:)를 기준으로 입력받은 문자열 분리 후 숫자로 변환 (input: string, output: number[])
  extractNumbers(numbersString, customSeparator) {
    const allSeparators = [
      ',',
      ':',
      ...(customSeparator ? [customSeparator] : []),
    ];
    const separatorRegex = new RegExp(`[${allSeparators.join('')}]`);

    return numbersString
      .split(separatorRegex)
      .map((numString) => numString.trim())
      .filter(Boolean)
      .map(Number);
  }

  validateNumbers(numberArray) {
    // 숫자가 아닌 값이 있으면 오류 발생
    if (numberArray.some((num) => isNaN(num))) {
      throw new Error('[ERROR] 잘못된 입력입니다.');
    }

    // 음수가 포함되어 있으면 오류 발생
    if (numberArray.some((num) => num < 0)) {
      throw new Error('[ERROR] 음수는 허용되지 않습니다.');
    }
  }
}

export default App;
