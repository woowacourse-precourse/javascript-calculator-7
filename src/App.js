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
    const separatedInput = cleanedInput.replace(separatorRegex, ",");

    // ,를 기준으로 문자열을 나누고 숫자 배열 생성
    const numbers = separatedInput
      .split(",")
      .map((num) => Number(num))
      .filter((num) => !isNaN(num));

    // 숫자 배열의 합계를 계산
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);

    // 테스트용
    Console.print(separators);
    Console.print(cleanedInput);
    Console.print(separatedInput);
    Console.print(numbers);
    Console.print(sum);
  }
}

export default App;
