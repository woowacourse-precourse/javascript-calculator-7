import Constant from "./constants/Constant";

class Validate {
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
}
export default Validate;
