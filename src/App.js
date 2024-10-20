import getUserInput from "./UI/getAddInput.js";
import userInputSeparator from "./feature/converter/stringConverter.js";
import getNumberArray from "./feature/converter/arrayConverter.js";
import errorHandler from "./feature/error/errorHandler.js";
import inputAdder from "./feature/caculate/inputAdder.js";
import resultUI from "./UI/resultUI.js";


class App {
  async run() {
    try {
      let inputText = await getUserInput();
      let calulateList = userInputSeparator(inputText);
      let numberList = getNumberArray(calulateList);
      let totalSum = inputAdder(numberList);
      resultUI(totalSum);
    } catch (error) {
      errorHandler(error);
    }
  }
}

export default App;
