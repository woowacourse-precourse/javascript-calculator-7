import INPUT from "../view/input";

class Controller {
  async start() {
    const userInput = await INPUT.getUserInput();
    console.log(userInput);
  }

  checkUserInput() {}
}
