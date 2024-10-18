import NumberProcessor from "./models/NumberProcessor.js";

class App {
  constructor(){
    this.model = new NumberProcessor();
  }
  async run() {
    const result = this.model.process('//;\n1;2;3',';');
    console.log(result);
    

  }
}

export default App;
