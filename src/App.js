import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {

    try{

      let input = await Console.readLineAsync("");

    }
    catch(err){
      Console.print(err.message);
      return;
    }

  }
}

export default App;
