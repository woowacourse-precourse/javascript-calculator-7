import input from './input.js';
import getCustomSplitter from './getCustomSplitter.js';
import checkValidate from './checkValidate.js';
import splitString from './splitString.js';
import print from './print.js';

class App {
  async run() {
    const userInput = await input();
    if (userInput.length === 0) return print(0);

    const [splitter, string] = getCustomSplitter(userInput);
    if (!checkValidate(splitter, string)) {
      throw new Error('[ERROR]잘못된 입력입니다.');
    }

    const numberArr = splitString(splitter, string);
    if (numberArr.length === 0) return print(0);
    const calculateNumber = numberArr.reduce((acc, cur) => acc + +cur, 0);

    return print(calculateNumber);
  }
}

export default App;
