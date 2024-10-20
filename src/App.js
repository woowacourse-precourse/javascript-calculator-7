import { MissionUtils } from "@woowacourse/mission-utils";
class App {

  parsingInput(input, delimiter) {
    const parsingNumbers = input.split(delimiter).map((value) => {
      var num = Number(value);
      if (isNaN(num)) {
        throw new Error("[ERROR]: 숫자가 아닌 값이 포함되어 있습니다.");
      }
      return num;
    });
    var num = parsingNumbers.reduce((a, b) => a + b);
    return num;
  }


  async run() {
    var result;
    const input = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n "
    );


  }
}

export default App;
