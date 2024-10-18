import add from "./calculator/add.js";
import consoleUtils from "./calculator/consoleUtils.js";

class App {
  async run() {
    const inputString = await consoleUtils();
    add(inputString);
  }
}

export default App;
