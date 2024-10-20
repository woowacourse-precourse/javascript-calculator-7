import { MissionUtils } from "@woowacourse/mission-utils";
import { inputUserString } from "./Input.js";
import { getCustomDelimiter } from "./utils/getCustomDelimiter.js";
import { getNumber } from "./utils/getNumber.js";
import { isNumber } from "./validators/numberValidator.js";
import { validateInput } from "./validators/inputValidator.js";
import { throwError } from "./utils/throwError.js";

class App {
  async run() {
    let nums = [];
    const customRegex = /^\/\/(.*?)\\n/;
    const userInput = await inputUserString();
    validateInput(userInput);
    const customDelimiter = getCustomDelimiter(userInput, customRegex);

    if (customDelimiter)
      nums = getNumber(userInput.replace(customRegex, ""), customDelimiter);
    else nums = getNumber(userInput, /,|:/);

    for (const n of nums) {
      if (!isNumber(n)) throwError("invalid number");
    }

    const sum = nums.reduce((acc, val) => acc + parseInt(val), 0);
    MissionUtils.Console.print(`결과 : ${sum}`);
  }
}

export default App;
