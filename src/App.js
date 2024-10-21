import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    let delimiters = [",", ":"]; //구분자

    //구분자들을 정규표현식을 이용하도록 조합
    const regex = new RegExp(`[${delimiters.join("")}]`);
    const result = input.split(regex).map(Number); //

    //result들을 합하여 결과 출력
    const output = result.reduce((acc, ele) => acc + ele, 0);
    Console.print(`결과 : ${output}`);
  }
}

export default App;
