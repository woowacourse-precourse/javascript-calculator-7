import { Console } from "@woowacourse/mission-utils";

class App {
  static DEFAULT_SEPARATOR_LIST = [",", ":"];

  static CUSTOM_SEPARATOR_PREFIX = "//";

  static CUSTOM_SEPARATOR_SUFFIX = "\\n";

  static splitBySeparatorList(inputString, separatorList) {
    return inputString.split(new RegExp(`[${separatorList.join("")}]`));
  }

  static sumNumericStringList(numericStringList) {
    return numericStringList.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue),
      0
    );
  }

  static includeCustomSeparator(inputString) {
    return (
      inputString.startsWith(App.CUSTOM_SEPARATOR_PREFIX) &&
      inputString.includes(
        App.CUSTOM_SEPARATOR_SUFFIX,
        App.CUSTOM_SEPARATOR_PREFIX.length
      )
    );
  }

  static getCustomSeparator(inputString) {
    return inputString.slice(
      App.CUSTOM_SEPARATOR_PREFIX.length,
      inputString.indexOf(App.CUSTOM_SEPARATOR_SUFFIX)
    );
  }

  static omitCustomSeparator(inputString) {
    return inputString.slice(
      inputString.indexOf(App.CUSTOM_SEPARATOR_SUFFIX) +
        App.CUSTOM_SEPARATOR_SUFFIX.length
    );
  }

  async run() {
    const inputString = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    const hasCustomSeparator = App.includeCustomSeparator(inputString);
    const splitResultList = App.splitBySeparatorList(
      hasCustomSeparator ? App.omitCustomSeparator(inputString) : inputString,
      hasCustomSeparator
        ? [App.getCustomSeparator(inputString)]
        : App.DEFAULT_SEPARATOR_LIST
    );

    return App.sumNumericStringList(splitResultList);
  }
}

export default App;
