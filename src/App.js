import View from "./view/View.js";

class App {
  async run() {
    const view = new View();

    const userInput = await view.inputPrompt();
    const customSeperator = this.isCustomSeparator(userInput);
  }

  isCustomSeparator(user) {
    const customCondition = /^\/\/(.)\\n/;
    const match = user.match(customCondition);

    return match ? match[1] : null;
  }
}

export default App;
