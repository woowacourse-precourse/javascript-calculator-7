import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let seperator = [",", ":"];
    let READ_STRING = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    const custom_seperator = this.findCustomSeperator(READ_STRING);

    // 연산할 문자열에서 custom_seperator를 제외한 문자열을 추출한다.
    // 여기서 남은 문자열에 구분자가 아닌 문자가 있는지 체크 후 있을 경우 에러 출력
    // 없다면 구분자를 기준으로 문자열을 나누어 배열로 만든다.
    // 배열의 각 요소를 정수로 변환한다.
    // 배열의 요소들을 더한 값을 반환한다.
    // 만약 값이 음수라면 에러를 출력한다.
    Console.print(custom_seperator);
  }

  // 만약 문자열에 커스텀 구분자가 있다면, 그 구분자를 반환한다.
  findCustomSeperator(READ_STRING) {
    let custom_seperator = ",";
    const REGEX = /(\/\/).+(\\n)/gm;
    let m = REGEX.exec(READ_STRING);
    if (m) {
      const st = m[0];
      custom_seperator = st.substring(2, st.length - 2);

      return {
        success: true,
        custom_seperator: custom_seperator,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

export default App;
