import { Console } from "@woowacourse/mission-utils";

class App {
  
  async run() { // 비동기 동작. 
    const getResult= (answer) => {
      Console.print(`결과 : ${answer}`);
      return;
    }

    Console.readLine('덧셈할 문자열을 입력해 주세요.\n', (answer) => {getResult(answer)});


  }
}

export default App;
