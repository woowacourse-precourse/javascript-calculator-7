import INPUT from "../view/input.js";

class Controller {
  async start() {
    const userInput = await INPUT.getUserInput();
  }

  checkUserInput() {}
}

export default Controller;
