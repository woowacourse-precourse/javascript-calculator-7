import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const INPUT_MESSAGE = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    let answer=999999;
    if(INPUT_MESSAGE==="") answer=0;

    Console.print(`결과 : ${answer}`)
  }
}

export default App;
