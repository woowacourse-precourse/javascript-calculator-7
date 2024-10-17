import { Console } from "@woowacourse/mission-utils";
import processInput from "./utils/processInput.js";

class App {
  async run() {
    const UserInputPromise = Console.readLineAsync()
    UserInputPromise.then((UserInput) => {
      const result = processInput(UserInput)
      Console.print(`결과 : ${result}`)
    })
  }
}

export default App;
