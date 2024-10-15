import Calculator from "./Calculator.js"
class App {
  async run() {

    const calculator = new Calculator();

    calculator.start();
  }
}

export default App;
