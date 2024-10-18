import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let separator = "";
    let splitedstring = "";

    Console.print("덧셈할 문자열을 입력해 주세요.");
    let input = await Console.readLineAsync("");

    if (input.length !== 0 && isNaN(input[0]) && input.slice(0, 2) !== "//") {
      throw new Error("[ERROR] 잘못된 입력입니다.");
    }

    if (input.slice(0, 2) === "//") {
      separator = input.slice(2, 3);
      input = input.slice(5);
      Console.print("커스텀 구분자: " + separator);
      Console.print("문자열: " + splitedstring);
    }

    // 쉼표(,)와 콜론(:)은 기본적으로 포함하고, 추가로 사용자 입력을 포함한 정규 표현식 생성
    const regex = new RegExp(`[${separator},:]+`);
    const result = input.split(regex);

    Console.print(result);

    // //;\n1;2;3
  }
}

export default App;
