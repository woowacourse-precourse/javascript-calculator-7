import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  //일단 파싱하는 함수
  parsingInput(input, delimiter) {
    const parsingNumbers = input.split(delimiter).map((value) => {
      var num = Number(value);
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
    if(input.length==0){//공백일 경우
      result = 0;
    }
    else if (input.startsWith("//")) {
      //커스텀 구분자일 가능성이 있는 경우
      const endOfDelimeter = input.indexOf("\\n");
      if (endOfDelimeter === -1) {
        throw new Error("[ERROR]: 잘못된 형식입니다");
      }
      const customDelimeter = input.slice(2, endOfDelimeter);
      if (typeof customDelimeter === "string") {
        const delimiters = customDelimeter.split(""); // 문자열을 배열로 변환
        delimiters.forEach((each) => {
          if (/\d/.test(each)) {
            throw new Error("[ERROR]: 구분자에 숫자가 포함되어 있습니다.");
          }
        });
      }
      const inputSlice = input.slice(endOfDelimeter + 2); //숫자 부분 추출
      result = this.parsingInput(
        inputSlice,
        new RegExp(`[${customDelimeter},:]`)
      );
    } else if (!isNaN(Number(input[0]))) {
      result = this.parsingInput(input, /[,:]/);
    
    } else {
      throw new Error("[ERROR]: ", "이상한 특수문자가 포함되어 있습니다.");
    }
    MissionUtils.Console.print(`"결과 : ${result}"`);

  }
}

export default App;
