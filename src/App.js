import addCal from "./calculator.js";

class App {
  async run() {
    const result = addCal("1,2,3");
    console.log(`Result: ${result}`);
  }
}

export default App;
