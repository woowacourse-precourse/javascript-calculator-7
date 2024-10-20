import { inputUserString } from "./Input.js";
import { getCustomDelimiter } from "./utils/getCustomDelimiter.js";
import { getNumber } from "./utils/getNumber.js";

class App {
  async run() {
    let nums = [];
    const customRegex = /\/\/(.*?)\\n/;
    const userInput = await inputUserString();
    const customDelimiter = getCustomDelimiter(userInput, customRegex);

    if (customDelimiter)
      nums = getNumber(userInput.replace(customRegex, ""), customDelimiter);
    else nums = getNumber(userInput, /,|:/);

    for (const n of nums) {
      if (!isNumber(n)) throw new Error("[ERROR]");
    }

    const sum = nums.reduce((acc, val) => acc + parseInt(val), 0);
    MissionUtils.Console.print(`결과 : ${sum}`);
  }
}

export default App;
