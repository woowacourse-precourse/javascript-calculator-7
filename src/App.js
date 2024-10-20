import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  //일단 파싱하는 함수
  parsingInput(input, delimiter) {
    //근데 이건 조건을 다 만족했다는 가정 하에

    const parsingNumbers = input.split(delimiter).map((value) => {
      //console.log("test",Number('4;'));NAN이 나옴
      //console.log(value)
      var num = Number(value);
      if (isNaN(num)) {
        throw new Error("[ERROR]: 숫자가 아닌 값이 포함되어 있습니다.");
      }
      return num;
    });
    if (parsingNumbers.length == 0) {
      return 0;
    }
    var num = parsingNumbers.reduce((a, b) => a + b);
    return num;
  }

  async run() {
    const input = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n "
    );
    //   //;\\n1 일 경우
    if (input.startsWith("//")) {
      //커스텀 구분자일 가능성이 있는 경우
      const endOfDelimeter = input.indexOf("\\n");
      //console.log("endOfDelimeter",endOfDelimeter)
      const customDelimeter = input.slice(2, endOfDelimeter);
      //console.log("customDelimeter",customDelimeter)
      const inputSlice = input.slice(endOfDelimeter + 2); //숫자 부분 추출
      //console.log("inputSlice:",inputSlice)
      const result = this.parsingInput(
        inputSlice,
        new RegExp(`[${customDelimeter},:]`)
      );
      MissionUtils.Console.print(`"결과 : ${result}"`);
    } else if (!isNaN(Number(input[0]))) {
      //만약에 Number(!)하면 isNaN나옴
      const result = this.parsingInput(input, /[,:]/);
      MissionUtils.Console.print(`"결과 : ${result}"`);
    } else {
      //그게 아니면 ===다른 특수문자로 시작하는 경우
      throw new Error("[ERROR]: ", "이상한 특수문자가 포함되어 있습니다.");
    }
  }
}

export default App;
