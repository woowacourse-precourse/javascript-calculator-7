import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    Console.print("덧셈할 문자열을 입력해 주세요.");

    const input = await Console.readLineAsync("");
    Console.print(input);
    this.calculate(input);
  }

  calculate(input) {
    if (input === "") return 0;

    input = "//;\n1;2;3";

    let strNumbers = input;

    //기본 구분자
    let delimiter = [",", ":"];

    //1.커스텀이 있는지 확인
    const regex = /^\/\/(.*?)\n([\s\S]*)$/;
    const match = input.match(regex);
    if (match) {
      delimiter = [match[1]];
      strNumbers = match[2];
    }

    //2. 구분자로 나누기
    const splitRegex = new RegExp(delimiter.join(""), "g");

    let numArr = strNumbers.split(splitRegex);

    console.log(numArr);

    //3.예외가 있는지 확인
  }
}

export default App;
