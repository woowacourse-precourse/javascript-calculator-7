import addCal from "./calculator.js";

class App {
  async run() {
    const result = addCal("//;\n 1;3;4;5");
    console.log(`Result: ${result}`);
  }
}

export default App;
