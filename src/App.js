import { inputUserString } from "./Input.js";
import { getCustomDelimiter } from "./utils/getCustomDelimiter.js";
import { getNumber } from "./utils/getNumber.js";

class App {
  async run() {
    let nums = [];
    const customRegex = /\/\/(.*?)\\n/;
    const userInput = await inputUserString();
    const customDelimiter = getCustomDelimiter(userInput, customRegex);

    if (customSeparator)
      nums = getNumber(userInput.replace(customRegex, ""), customDelimiter);
    else nums = getNumber(userInput, /,|:/);
  }
}

export default App;
