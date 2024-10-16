import View from "./view/View.js";

class App {
  async run() {
    const view = new View();
    const inputValue = await view.inputPrompt();
  }
}

export default App;
