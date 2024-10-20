import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let separator = [];
    let customSeperator = [];

    try {
      let string = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      separator = string.match(/\/\/(.*?)\\n(.*)/);

      // "//", "\n"이 있다면 커스텀 구분자 지정
      if (separator) {
        customSeperator = separator[1];
        string = separator[2];
      }

      // 기본 구분자, 커스텀 구분자 기준으로 숫자 배열 생성
      let regexp = new RegExp(`[,:${customSeperator}]`);
      if (customSeperator == "" && separator) regexp = /(?=.)/;

      const numArr = string.split(regexp).map(Number);
    } catch (error) {}
  }
}

export default App;
