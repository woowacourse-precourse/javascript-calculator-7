import INPUT from "../view/input.js";
import { splitReg } from "../constants/reg.js";

class Controller {
  async start() {
    const userInput = await INPUT.getUserInput();

    const [custom, other] = this.findCustomDelimiter(userInput);
    console.log(this.checkCustomDelimiter(custom.split("")));
  }

  findCustomDelimiter(string) {
    const str = string.match(splitReg);
    if (str === null) return ["", str];

    return [str[1], str[2]];
  }

  checkCustomDelimiter(stringList) {
    return stringList.filter((string) => !isNaN(+string)).length === 0;
  }
}

export default Controller;
