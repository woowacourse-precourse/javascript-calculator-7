export default class Validation {
  static checkPositiveNum(splitedNums) {
    let isExistNegative = splitedNums.map((num) => (num < 0 ? true : false));

    if (isExistNegative.toString().includes("true")) {
      throw new Error("[ERROR] 정수를 입력해주세요.");
    }
  }
}
