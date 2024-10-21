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
  
    const dividepattern = new RegExp (`[${symbol.join('')}]`);
    const result = input.split(dividepattern);
  
    return result;
  }
}

export default App;
