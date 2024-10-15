import InputView from "./view/inputView.js";

class App {
  async run() {
    const inputView = new InputView();
    inputView.getInputText();
  }
}

export default App;
