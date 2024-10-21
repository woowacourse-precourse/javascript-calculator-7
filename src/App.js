import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요: ');
      const result = this.divide(input); // this로 divide 메소드 호출
      const sum = this.calculate(result); // calculate 호출
      MissionUtils.Console.print(`결과 : ${sum}`);
    } catch (error) {
      MissionUtils.Console.print(`${error.message}`);
      throw error;
    }
  }

  divide(input) {
    let symbol = [',', ':']; //기본 구분자 설정
    let numstring = input; //커스텀 구분자의 경우 숫자부분 추출을 위한 변수

    //커스텀 구분자 처리
    if (input.startsWith('//')) {
      const symbolindex = input.indexOf('\\n');
      if (symbolindex === -1) {
        this.throwError('[ERROR] 잘못된 형식입니다.');
      }

      // 커스텀 구분자를 추출
      const customsymbol = input.substring(2, symbolindex);
      symbol.push(customsymbol);  // 커스텀 구분자를 기본 구분자 배열에 추가
      numstring = input.substring(symbolindex + 2);  // 숫자 부분 추출
    }

    //구분자에 의한 문자열 처리
    const dividepattern = new RegExp(`[${symbol.join('')}]`);
    const result = numstring.split(dividepattern);

    // 결과를 숫자로 변환하고 검증
    const numbers = result.map(num => {
      const parsedNumber = Number(num);
      if (isNaN(parsedNumber)) {
        this.throwError('[ERROR] 숫자가 아닌 값이 입력되었습니다.');
      }
      if (parsedNumber < 0) {
        this.throwError('[ERROR] 음수는 처리할 수 없습니다.');
      }
      return parsedNumber;
    });

    return numbers;
  }

  // 구분한 숫자열이 입력되면 덧셈
  calculate(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }

  // 에러 메세지 처리
  throwError(message) {
    throw new Error(message);
  }
}

export default App;
