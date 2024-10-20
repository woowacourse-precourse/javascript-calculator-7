import INPUT from "../view/input.js";
import reg from "../constants/reg.js";

class Controller {
  async start() {
    const userInput = await INPUT.getUserInput();

    const [custom, other] = this.findCustomDelimiter(userInput);
  }

  findCustomDelimiter(string) {
    const str = string.match(reg);

    return [str[1], str[2]];
  }

  checkCustomDelimiter(string) {}
}

export default Controller;
