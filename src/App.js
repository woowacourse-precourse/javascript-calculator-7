import InputView from "./views/InputView.js"

class App {
  constructor(){
    this.model = new InputView();
  }
  async run() {
    const result = this.model.getInput();
    console.log(result);
    

  }
}

export default App;
