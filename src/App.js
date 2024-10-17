import View from "./view/View.js";

class App {
  async run() {
    const view = new View();

    const userInput = await view.inputPrompt();
    const customSeperator = this.isCustomSeparator(userInput);
    const inputArr = this.userValueArr(userInput, customSeperator);
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
}

export default App;
