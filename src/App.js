import addCal from "./calculator.js";

class App {
  async run() {
    const result = addCal("//;\n 1;3;4;5;-1");
    console.log(`결과: ${result}`);
  }
}

export default App;
