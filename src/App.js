// import { Console } from "@woowacourse/mission-utils";
import { input, print } from "./utils/ioHandler.js";
import { calculator } from "./caclulator.js";
class App {
  async run() {
    try{
      const expression = await input('덧셈할 문자열을 입력해 주세요.\n');
      const answer = await calculator(expression);
      print("결과 : " + answer);
      return;
    }catch(error){
      throw error;
    }
  }
}

export default App;
