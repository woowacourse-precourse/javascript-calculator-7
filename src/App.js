import View from "./view/View.js";
import Constant from "./constants.js/Constant.js";

class App {
  async run() {
    const view = new View();

    const userInput = await view.inputPrompt();
    const customSeperator = this.isCustomSeparator(userInput);
    const inputArr = this.userValueArr(userInput, customSeperator);
    const verifiedArr = this.validateValue(inputArr);
    const sum = this.calculate(verifiedArr);

    view.outputView(sum);
  }

  isCustomSeparator(user) {
    const match = user.match(Constant.CUSTOM_SEPERATOR_REGIX);

    return match ? match[1] : null;
  }

  userValueArr(user, customSeperator) {
    let arr = [];
    if (customSeperator) {
      let newUserStirng = this.removeCustomCondition(user);
      arr = newUserStirng.split(Constant.DEFAULT_SEPERATOR_REGIX);
      arr = newUserStirng.split(customSeperator);
      return arr;
    }
    arr = user.split(Constant.DEFAULT_SEPERATOR_REGIX);
    return arr;
  }

  removeCustomCondition(user) {
    const start = user.indexOf(Constant.CUSTOM_CODITION_FIRST_STR);
    const end = user.indexOf(Constant.CUSTOM_CODITION_LAST_STR) + 1;

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
