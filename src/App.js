import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  //인풋을 파싱하는 함수(누적합을 리턴)
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
    //공백을 받는 경우
    if(input.length==0){
      result = 0;
    }

    // Case 1. 커스텀 구분자일 수 있는 경우를 가장 먼저 필터링한다
    else if (input.startsWith("//")) {
      const endOfDelimeter = input.indexOf("\\n");
    
      if (endOfDelimeter === -1) {
        throw new Error("[ERROR]: 잘못된 형식입니다");
      }
      const customDelimeter = input.slice(2, endOfDelimeter);

      //구분자를 배열로 변환하여 안에 숫자가 포함되어 있는지를 체크한다
      if (typeof customDelimeter === "string") {
        const delimiters = customDelimeter.split(""); 
        delimiters.forEach((each) => {
          if (/\d/.test(each)) {
            throw new Error("[ERROR]: 구분자에 숫자가 포함되어 있습니다.");
          }
        });
      }

      const inputSlice = input.slice(endOfDelimeter + 2); 
      result = this.parsingInput(
        inputSlice,
        new RegExp(`[${customDelimeter},:]`)
      );

      //Case 2. 기본 구분자로만 검사하는 경우
    } else if (!isNaN(Number(input[0]))) {
      result = this.parsingInput(input, /[,:]/);
    } 
    //Case 3. 그 외에는 에러처리
    else {
      throw new Error("[ERROR]: ", "이상한 특수문자가 포함되어 있습니다.");
    }
    MissionUtils.Console.print(`"결과 : ${result}"`);

  }
}

export default App;
