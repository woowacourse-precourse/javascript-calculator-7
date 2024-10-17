import StringCalculator from './models/StringCalculator.js';

class App {
  constructor(){
    this.model = new StringCalculator();
  }
  async run() {
    this.model.calculate('//;\n1;2;3');

  }
}

export default App;
