import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync("덧셈할 문자열 입력: ");
    if (input == '') return 0;
    const COLON = ':';
    const COMMA = ',';
    const regex = /\/\/(.*)\\n/;
    const custom = input.match(regex);
    const customSeperate = custom ? custom[1] : '';

    let inputArr = input.split('');

    let newInput = inputArr.map(str => {
      if (str === COLON || str === COMMA || str === customSeperate) {
        return " ";
      }
      return str;
    });

    console.log(newInput);

    MissionUtils.Console.print(`입력 값: ${input}`);
  }
}

export default App;