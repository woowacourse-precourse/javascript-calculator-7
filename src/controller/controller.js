import INPUT from "../view/input.js";
import { splitReg } from "../constants/reg.js";
import Model from "../model/model.js";

class Controller {
  model = new Model();

  async start() {
    const userInput = await INPUT.getUserInput();

    const [custom, other] = this.findCustomDelimiter(userInput);

    this.checkCustomDelimiter(custom);

    this.model.addDelimiter(custom);

    console.log(this.model.calculate(other));
  }

  findCustomDelimiter(string) {
    const str = string.match(splitReg);

    if (str === null) return [[""], string];

    return [str[1].split(""), str[2]];
  }

  checkCustomDelimiter(stringList) {
    if (stringList[0] === "") return;
    if (stringList.filter((string) => !isNaN(+string)).length > 0) {
      throwError("숫자는 커스텀문자에 들어갈 수 없습니다.");
    }
  }
}

export default Controller;
