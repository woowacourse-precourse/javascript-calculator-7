import { Console } from "@woowacourse/mission-utils";

class App {
  static DEFAULT_SEPARATOR_LIST = [",", ":"];

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
    let splitResultList = [inputString];

    for (const separator of App.DEFAULT_SEPARATOR_LIST) {
      let tempSplitResultList = [];

      for (const splitResult of splitResultList) {
        tempSplitResultList = [
          ...tempSplitResultList,
          ...splitResult.split(separator),
        ];
      }

      splitResultList = tempSplitResultList;
    }

    return App.sumNumericStringList(splitResultList);
  }
}

export default App;
