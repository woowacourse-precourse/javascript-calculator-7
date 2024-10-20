import { Console } from "@woowacourse/mission-utils";
import Input from "./Input.js";
import Separator from "./Separator.js";
import Validator from "./Validator.js";
import Calculator from "./Calculator.js";

class App {
  async run() {
    // 문자열 입력
    const input = await new Input().getInput();

    // 입력값이 비어 있는 경우 0 출력
    if (!input) return Console.print("결과 : 0");

    // 구분자에 따른 배열 처리
    let numbers = new Separator().process(input);

    // 예외처리
    new Validator().validate(numbers);

    // 합 계산
    const sum = new Calculator().sum(numbers);

    // 결과 출력
    Console.print(`결과 : ${sum}`);
  }
}

export default App;
