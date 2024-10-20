import Constant from "./constants/Constant.js";

class Separator {
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
}

export default Separator;
