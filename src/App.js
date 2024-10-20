import { Console } from "@woowacourse/mission-utils";
import { calculator } from "./caclulator.js";
class App {
  async run() {
    try{
      const expression = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      const answer = await calculator(expression);
      Console.print("결과 : " + answer);
      return;
    }catch(error){
      throw error;
    }
  }
}

export default App;
