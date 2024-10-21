import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const INPUT_PROMPT = '덧셈할 문자열을 입력해 주세요: ';
    const userInputString = await Console.readLineAsync(INPUT_PROMPT);

    try {
      const sumResult = this.calculateSum(userInputString);
      Console.print(`결과 : ${sumResult}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  // 입력 받은 문자열 안의 숫자 합계 계산 (input: string, output: number)
  calculateSum(inputString) {
    // 입력이 비어있으면 0을 반환
    if (inputString.trim() === '') {
      return 0;
    }

    const { numbersString, customSeparator } = this.parseInput(inputString);
    const numberArray = this.extractNumbers(numbersString, customSeparator);
    this.validateNumbers(numberArray);

    return numberArray.reduce((total, num) => total + num, 0);
  }

  // 입력 문자열을 파싱하여 숫자 부분과 커스텀 구분자를 추출
  parseInput(inputString) {
    const customSeparatorPattern = /^\/\/(.)\\n/;
    const matchResult = inputString.match(customSeparatorPattern);
    if (matchResult) {
      return {
        numbersString: inputString.replace(/^\/\/(.)\\n/, '').trim(),
        customSeparator: matchResult[1],
      };
    }
    return { numbersString: inputString, customSeparator: null };
  }

  // 기본 구분자 쉼표(,)와 콜론(:)를 기준으로 입력받은 문자열 분리 후 숫자로 변환 (input: string, output: number[])
  extractNumbers(numbersString, customSeparator) {
    let separators = [',', ':'];
    if (customSeparator) {
      separators = [customSeparator];
    }
    const separatorRegex = new RegExp(
      `[${separators
        .map((sep) => sep.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'))
        .join('')}]`,
      'g'
    );
    const separatedInput = numbersString.replace(separatorRegex, ',');
    const splitValues = separatedInput.split(',').map((num) => num.trim());

    if (splitValues.some((value) => value === '')) {
      throw new Error('[ERROR] 구분자 사이에 숫자가 없습니다');
    }

    return splitValues.map(Number);
  }

  validateNumbers(numberArray) {
    // 숫자가 아닌 값이 있으면 오류 발생
    if (numberArray.some((num) => isNaN(num) || !Number.isInteger(num))) {
      throw new Error('[ERROR] 잘못된 값이 입력되었습니다');
    }

    // 0이나 음수가 포함되어 있으면 오류 발생
    if (numberArray.some((num) => num <= 0)) {
      throw new Error('[ERROR] 입력값은 양수로만 구성되어야 합니다');
    }
  }
}

export default App;
