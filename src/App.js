import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {

    try {
      const input = await MissionUtils.Console.readLineAsync('숫자를 입력하세요: ');
      const result = this.divide(input); // this로 divide 메소드 호출
      MissionUtils.Console.print(`결과: ${result}`);
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  divide(input){
    let symbol = [',',':'];
    let numstring = input

    if (input.startsWith('//')) {
      const symbolindex = input.indexOf('\\n');
      MissionUtils.Console.print(`symbolindex: ${symbolindex}`);
      if (symbolindex === -1) {
          this.throwError("");  // 잘못된 형식이면 에러 발생
      }

      // 커스텀 구분자를 추출
      const customsymbol = input.substring(2, symbolindex);
      symbol.push(customsymbol);  // 커스텀 구분자를 기본 구분자 배열에 추가
      console.log(symbol);
      numstring = input.substring(symbolindex + 2);  // 숫자 부분 추출
  }
  
    const dividepattern = new RegExp (`[${symbol.join('')}]`);
    const result = numstring.split(dividepattern);
  
    return result;
  }

  throwError() {
    throw new Error('[ERROR] 잘못된 입력입니다.');
  }
}

export default App;
