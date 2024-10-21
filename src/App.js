import { MESSAGES } from "./constants/messages.js";
import calcurateresult from "./utils/calcurateresult.js";
import setDelimiter from "./utils/setDelimiter.js";
import splitNumbers from "./utils/splitNumbers.js";
import UserInput from "./utils/userInput.js";
import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {

    try {
      const input = await UserInput();
      const delimiter = await setDelimiter(input);
      const numbers = await splitNumbers(input, delimiter);
      const result = calcurateresult(numbers);// numbers 배열 모두 더해서 계산
      MissionUtils.Console.print(MESSAGES.RESULT + result);
    }
    catch (error) {
      MissionUtils.Console.print(error.message); 
      throw error;
    }

  }

}

export default App;
