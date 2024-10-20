import { MissionUtils } from "@woowacourse/mission-utils";
import { inputUserString } from "./Input.js";
import { getCustomDelimiter } from "./utils/getCustomDelimiter.js";
import { getNumber } from "./utils/getNumber.js";
import { validateNumbers } from "./validators/numberValidator.js";
import { validateInput } from "./validators/inputValidator.js";

class App {
  async run() {
    const customRegex = /^\/\/(.*?)\\n/;
    const userInput = await inputUserString();

    validateInput(userInput);

    const customDelimiter = getCustomDelimiter(userInput, customRegex);
    const filterdInput = userInput.replace(customRegex, "");
    const nums = getNumber(filterdInput, customDelimiter || /,|:/);

    validateNumbers(nums);

    const sum = nums.reduce((acc, val) => acc + parseInt(val), 0);
    MissionUtils.Console.print(`결과 : ${sum}`);
  }
}

export default App;
