import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync('숫자를 입력하세요: ');
      const result = this.divide(input); // this로 divide 메소드 호출
      const sum = this.calculate(result); // calculate 호출
      MissionUtils.Console.print(`결과: ${sum}`);
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
    }
  }

  divide(input) {
    let symbol = [',', ':'];
    let numstring = input;

    if (input.startsWith('//')) {
      const symbolindex = input.indexOf('\\n');
      if (symbolindex === -1) {
        this.throwError('잘못된 형식입니다.');
      }

      // 커스텀 구분자를 추출
      const customsymbol = input.substring(2, symbolindex);
      symbol.push(customsymbol);  // 커스텀 구분자를 기본 구분자 배열에 추가
      numstring = input.substring(symbolindex + 2);  // 숫자 부분 추출
    }

    const dividepattern = new RegExp(`[${symbol.join('')}]`);
    const result = numstring.split(dividepattern);

    // 결과를 숫자로 변환하고 검증
    const numbers = result.map(num => {
      const parsedNumber = Number(num);
      if (isNaN(parsedNumber)) {
        this.throwError('숫자가 아닌 값이 입력되었습니다.');
      }
      if (parsedNumber < 0) {
        this.throwError('음수는 처리할 수 없습니다.');
      }
      return parsedNumber;
    });

    return numbers;
  }

  calculate(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }

  throwError(message) {
    throw new Error(message);
  }
}

export default App;
