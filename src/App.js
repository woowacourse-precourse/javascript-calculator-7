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

    if (input.startsWith("//")) {
      //커스텀 구분자일 가능성이 있는 경우
      const endOfDelimeter = input.indexOf("\\n");

      const customDelimeter = input.slice(2, endOfDelimeter);

      const inputSlice = input.slice(endOfDelimeter + 2); //숫자 부분 추출

      result = this.parsingInput(
        inputSlice,
        new RegExp(`[${customDelimeter},:]`)
      );
    } else if (!isNaN(Number(input[0]))) {
      //만약에 Number(!)하면 isNaN나옴
      result = this.parsingInput(input, /[,:]/);
    
    } 

    MissionUtils.Console.print(`"결과 : ${result}"`);

  }
}

export default App;
