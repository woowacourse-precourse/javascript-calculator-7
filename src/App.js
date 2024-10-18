const { Console } = await import("@woowacourse/mission-utils");
import Default from "./Default.js";
import Custom from "./Custom.js";
import Common from "./Common.js";
class App {
  async run() {
    const common = new Common();
    Console.print("덧셈할 문자열을 입력해 주세요.");

    let module;
    let result = 0;
    let input = await Console.readLineAsync("");
    input = input.replace(" ", ""); // 공백 제거
    const type = common.checkType(input);

    if (type === "default") {
      module = new Default();
    } else if (type === "custom") {
      module = new Custom();
    }

    // 연산
    if (module.checkValidation(input) == false) {
      throw common.validationError();
    }

    result = module.calculate(input);

    Console.print("결과 : " + result);
  }

}

export default App;
