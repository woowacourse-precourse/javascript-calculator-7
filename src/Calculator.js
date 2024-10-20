class Calculator {
  getSeperatorFrom(userInputString) {
    const customSeperator = userInputString.match(/\/\/(.*?)\\n/);

    if (!customSeperator) {
      return 0; // 커스텀구분자가 없다는 것을 알리기 위해 0을 반환
    }

    return customSeperator[1];
  }

  seperateBy(removedString, customSeperator = "") {
    const seperators = new RegExp(`[, : ${customSeperator}]`, "g");
    return removedString.split(seperators);
  }

  getSumOf(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
  }
}

export default Calculator;
