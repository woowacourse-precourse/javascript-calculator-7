import { Console } from "@woowacourse/mission-utils";
import { calculator } from "./caclulator.js";
class App {
  async run() {
    try{
      const answer = await calculator();
      Console.print("결과 : " + answer);
      return;
    }catch(error){
      throw error;
    }
  }
}

export default App;
