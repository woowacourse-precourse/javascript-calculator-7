import View from "./view/View.js";
import Constant from "./constants.js/Constant.js";

class App {
  async run() {
    const view = new View();

    const userInput = await view.inputPrompt();
    const customSeparator = this.isCustomSeparator(userInput);
    const inputArr = this.userValueArr(userInput, customSeparator);
    const verifiedArr = this.validateValue(inputArr);
    const sum = this.calculate(verifiedArr);

    view.outputView(sum);
  }

  isCustomSeparator(user) {
    const match = user.match(Constant.CUSTOM_SEPARATOR_REGEX);

    return match ? match[1] : null;
  }

  userValueArr(user, customSeparator) {
    let arr = [];
    if (customSeparator) {
      let newUserString = this.removeCustomCondition(user);
      arr = newUserString.split(Constant.DEFAULT_SEPARATOR_REGEX);
      arr = newUserString.split(customSeparator);
      return arr;
    }
    arr = user.split(Constant.DEFAULT_SEPARATOR_REGEX);
    return arr;
  }

  removeCustomCondition(user) {
    const start = user.indexOf(Constant.CUSTOM_CONDITION_FIRST_STR);
    const end = user.indexOf(Constant.CUSTOM_CONDITION_LAST_STR) + 1;

    return user.slice(0, start) + user.slice(end);
  }

  validateValue(arr) {
    let tempArr = [];
    for (let str of arr) {
      tempArr.push(Number(str));
    }

    for (let i = 0; i < tempArr.length; i++) {
      if (isNaN(tempArr[i]) || tempArr[i] < 0) {
        throw new Error(Constant.ERROR_MESSAGE);
      }
    }

    return tempArr;
  }

  calculate(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    return sum;
  }
}

export default App;
