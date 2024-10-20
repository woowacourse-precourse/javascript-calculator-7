import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    Console.print('덧셈할 문자열을 입력해 주세요.')
    const input = await Console.readLineAsync('');

    if (input === ""){
      Console.print('0')
    }

    let separation =  /[,|:]/;
    let numbers = [];
    const CUSTOM_START_INDEX = input.startsWith('//')
    const CUSTOM_END_INDEX = input.indexOf('\\n')

  }
}

export default App;
