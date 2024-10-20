import { Console } from '@woowacourse/mission-utils';
import Calculator from './calculator.js';

class App {
  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n',);
    try {
      const calculator = new Calculator(input);
      const result = calculator.calculate();
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
      /*
      Received promise resolved instead of rejected 오류 해결 라인
      에러가 발생하자마자 Promise가 reject 되어야 하는데, 
      Console.print 로 출력하고 있어서, reject 되고 있지 않았음.

      해결책: catch 블록에서 다시 에러를 throw하면 에러 메세지를 출력 후 
            Promise를 reject 하게된다.
      */
      throw error;
    }
  }
}

export default App;
