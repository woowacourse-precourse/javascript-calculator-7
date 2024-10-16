import { Console } from "@woowacourse/mission-utils";
import { calculator } from "./caclulator.js";
class App {
  async run() {
    try{
      await calculator();
    }catch(error){
      Console.print(error.message);
      return;
    }
  }
}

export default App;
