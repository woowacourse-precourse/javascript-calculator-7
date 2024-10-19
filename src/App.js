import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try{
      const input = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해주세요\n");
      this.calculate(input);
    } catch(error) {
      MissionUtils.Console.print(`Error: ${error.message}`);
    }
  }

  calculate = (text) => {
    let answer = 0;
    const splited = text.split(/,|:/);
    for(let num of splited){
      if(isNaN(Number(num))){
        throw new Error(`'${num}' is not a valid number.`);
      }
      answer += Number(num);
    }
    MissionUtils.Console.print(answer);
  }
}

export default App;
