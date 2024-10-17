import { getInput } from "./inputFunctions";

class App {
  async run() {
    const INPUT_STRING = await getInput();
    const inputData = new Input(INPUT_STRING);
  }
}

export default App;
