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

    const {customSetarator, endIndex} = this.getCustomSeparator(text);
    customSetarator && (text = text.slice(endIndex+2));

    const regex = new RegExp(`[${customSetarator},:]`);
    const splited = text.split(regex);

    for(let num of splited){
      if(isNaN(Number(num))){
        throw new Error(`'${num}' is not a valid number.`);
      }
      answer += Number(num);
    }

    MissionUtils.Console.print(`결과 : ${answer}`);
  }

  getCustomSeparator = (text) => {
    let customSetarator;
    let endIndex = 0;

    if(text.slice(0, 2) === '//'){
      endIndex = text.indexOf('\\n');
      (endIndex !== -1) && (customSetarator = text.slice(2, endIndex));
    }
    return {customSetarator, endIndex};
  }
}

export default App;
