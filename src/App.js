import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    if (input == '') return MissionUtils.Console.print(`결과 : 0`);;

    const COLON = ':';
    const COMMA = ',';
    const regex = /\/\/(.*)\\n/;
    const custom = input.match(regex);
    const customSeperate = custom ? custom[1] : '';

    let newInput = input.split('').map(str => {
      if (str === COLON || str === COMMA || str === customSeperate) {
        return " ";
      }
      return str;
    });

    let strInput = '';

    if (customSeperate) {
      strInput = newInput.slice(5).join('').split(/\s+/);
    } else {
      strInput = newInput.join('').split(/\s+/);
    }
    const result = strInput.reduce((acc, cur) => acc + Number(cur), 0);

    if (strInput.some(num => (isNaN(num) || num <= 0))) {
      throw new Error("[ERROR]");
    } else {
      MissionUtils.Console.print(`결과 : ${result}`);
    }
  }
}

export default App;