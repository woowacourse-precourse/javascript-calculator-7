import { inputUserString } from "./Input.js";
import { getCustomDelimiter } from "./utils/getCustomDelimiter.js";

class App {
  async run() {
    let nums = [];
    const customRegex = /\/\/(.*?)\\n/;
    const userInput = await inputUserString();
    const customDelimiter = getCustomDelimiter(userInput, customRegex);
  }
}

export default App;
