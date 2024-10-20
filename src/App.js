import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try{
      const userinput = await Console.readLineAsync(`덧셈할 문자열을 입력해 주세요.\n`);
      Console.print(userinput);
      const result = userinput.split(',').reduce((acc, cur) => acc + parseInt(cur), 0);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }

  }
}

export default App;