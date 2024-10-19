import { Console } from "@woowacourse/mission-utils";

let separators = [",", ":"];
const REGEX_CUSTOM_SEPARATOR = /^\/\/(.+)\\n/;

class App {
  async run() {
    try {
      // 값 입력받기
      let input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

      // 커스텀 구분자 저장하기
      const customMatch = input.match(REGEX_CUSTOM_SEPARATOR);
      if (customMatch) {
        const customSeparator = customMatch[1]; // 캡처된 구분자
        separators.push(customSeparator); // 기존 구분자 배열에 추가
        input = input.replace(REGEX_CUSTOM_SEPARATOR, "");
      }

      // 구분자들로 정규식 생성
      const REGEX_SEPARATOR = new RegExp(separators.map((s) => `\\${s}`).join("|"), "g");

      const numArr = input.split(REGEX_SEPARATOR).map(Number);

      const sum = numArr.reduce((acc, current) => acc + current, 0);
      Console.print("결과 : " + sum);
    } catch (error) {
      Console.print(error);
    }
  }
}

export default App;
