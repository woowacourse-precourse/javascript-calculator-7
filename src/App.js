import View from "./view/View.js";
import Constant from "./constants.js/Constant.js";

class App {
  async run() {
    const view = new View();

    const userInput = await view.inputPrompt();
    const customSeperator = this.isCustomSeparator(userInput);
    const inputArr = this.userValueArr(userInput, customSeperator);
    this.validateValue(inputArr);
  }

  isCustomSeparator(user) {
    const customCondition = /^\/\/(.)\\n/;
    const match = user.match(customCondition);

    return match ? match[1] : null;
  }

  userValueArr(user, customSeperator) {
    let arr = [];
    if (customSeperator) {
      let newUserStirng = this.removeCustomCondition(user);
      arr = newUserStirng.split(/[,:]/);
      arr = newUserStirng.split(customSeperator);
      return arr;
    }
    arr = user.split(/[,:]/);
    return arr;
  }

  removeCustomCondition(user) {
    const start = user.indexOf("/");
    const end = user.indexOf("n") + 1;

    return user.slice(0, start) + user.slice(end);
  }

  validateValue(arr) {
    let tempArr = [];
    for (let str of arr) {
      tempArr.push(Number(str));
    }

    for (let i = 0; i < tempArr.length; i++) {
      if (isNaN(tempArr[i]) || tempArr[i] < 0) {
        throw new Error(Constant.errorMessage);
      }
    }

    return tempArr;
  }
}

export default App;
