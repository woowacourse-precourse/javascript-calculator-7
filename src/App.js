import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    //사용자가 문자열 입력
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    
    let delimiter = new RegExp(`[,:]`);
    const customDelimiter = /\/\/(.)\\n/;
    let parseTarget = input;

    if (input.match(customDelimiter)){
      const matched = input.match(customDelimiter);
      const newDelimiter = matched[1];
      delimiter = new RegExp(`[${newDelimiter},:]`);
      parseTarget = input.slice(5);
    }
    //문자열에서 정규표현식으로 구분자 찾아 숫자 배열로 파싱
    const parsedList = parseTarget.trim().split(delimiter).map(Number);
    //숫자 배열 돌면서 값 더하기
    const result = parsedList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    try {
      if (isNaN(result) || parsedList.some((prev) => prev < 0) ) {
        throw new Error("[ERROR]")
      }
      Console.print("결과 : " + result);
    } catch (error) {
      throw error;
    }
    // 결과 출력
    
  }
}

export default App;
