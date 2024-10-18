import { Console } from "@woowacourse/mission-utils";

class App {
  static DEFAULT_SEPARATOR_LIST = [",", ":"];

  static splitInputString(
    inputString,
    separatorList = App.DEFAULT_SEPARATOR_LIST
  ) {
    return inputString.split(new RegExp(`[${separatorList.join("")}]`));
  }

  static sumNumericStringList(numericStringList) {
    return numericStringList.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue),
      0
    );
  }

  async run() {
    const inputString = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    const splitResultList = App.splitInputString(inputString);

    console.log(App.sumNumericStringList(splitResultList));

    return App.sumNumericStringList(splitResultList);
  }
}

export default App;
