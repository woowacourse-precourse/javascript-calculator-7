import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    // readLineAsync() 이용해서 문자열 입력 받기
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    // 구분자 저장하는 배열 만들기
    const separators = [".", ":"];

    // 커스텀 구분자 저장 변수 : customSeparator
    const customSeparator = input.match(/^\/\/(.)\\n/);

    let cleanedInput = input;

    // 만약 customSeparator가 존재한다면 해당 구분자 배열에 저장하기
    if (customSeparator) {
      separators.push(customSeparator[1]);

      // 입력 문자열에서 커스텀 구분자 부분 제거
      cleanedInput = input.replace(/^\/\/(.)\\n/, "");
    }

    // 모든 구분자들을 ','로 변환
    const separatorRegex = new RegExp(
      `[${separators
        .map((sep) => sep.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"))
        .join("")}]`,
      "g"
    );
    const SeparatedInput = cleanedInput.replace(separatorRegex, ",");

    // 테스트용
    Console.print(separators);
    Console.print(cleanedInput);
    Console.print(SeparatedInput);
  }
}

export default App;
