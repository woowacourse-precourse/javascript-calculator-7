import { Console } from '@woowacourse/mission-utils';
import Calculator from "./calculator/Calculator";
import { ERROR_MESSAGE } from "./constants/Messages";

class App {
  async run() {
    try {
      Console.print("덧셈할 문자열을 입력해 주세요.");
      const input  = await Console.readLineAsync();

      const result = Calculator.calculate(input);

      Console.print(`결과 : ${result}`);
    } catch (error) {
      throw new Error(error.message);
    }
  } 
}

export default App;
