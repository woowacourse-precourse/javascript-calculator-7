import input from './input.js';
import getCustomSplitter from './getCustomSplitter.js';
import checkValidate from './checkValidate.js';

class App {
  async run() {
    const userInput = await input();
    const [splitter, string] = getCustomSplitter(userInput);

    if (!checkValidate(splitter, string)) {
      throw new Error('[ERROR]잘못된 입력입니다.');
    }
  }
}

export default App;
