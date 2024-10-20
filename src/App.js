import Calculator from "./Calculator";
class App {
  async run() {
    const calculator = new Calculator();
    await calculator.calculate();
  }
}

export default App;
