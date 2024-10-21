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
      Console.print(ERROR_MESSAGE.INVALID_INPUT);
      process.exit(1); 
    }
  } 
}

export default App;
