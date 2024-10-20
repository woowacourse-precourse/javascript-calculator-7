import { input, print } from "./utils/ioHandler.js";
import { calculator } from "./caclulator.js";
import { IO_MESSAGE } from "./constant/index.js";
class App {
  async run() {
    try{
      const expression = await input(IO_MESSAGE.INPUT);
      const answer = calculator(expression);
      print(IO_MESSAGE.OUTPUT + answer);
    }catch(error){
      throw error;
    }
  }
}

export default App;
