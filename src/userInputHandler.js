export default class UserInputHandler {
  static sum(arr) {
    return arr.reduce((acc, cur) => acc + Number(cur), 0);
  }

  static getSplitedBySeparator(input, customSeparator) {
    const separatorRegExp = new RegExp(
      `${customSeparator ? customSeparator + '|' : ''}[,:]`,
    );
    return input.split(separatorRegExp);
  }

  static getCustomSeparator(input) {
    let splitInput = input.split(/(?:\/\/|\\n)/);
    const customSeparator = splitInput[1];
    return customSeparator;
  }

  static getRemovedCustomSeparator(input) {
    return input.split(/\\n/)[1];
  }
}
