import { Console } from '@woowacourse/mission-utils';
import { addInput, calculateResult } from './actions/calculatorAction.js';
import dispatcher from './dispatcher/calculatorDispatcher.js';
import calculatorStore from './stores/calculatorStore.js';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.\n',
      );

      // dispatch에 리스너 등록
      dispatcher.register((action) => {
        calculatorStore.handleAction(action);
      });

      // 입력받은 input 등록
      dispatcher.dispatch(addInput(input));

      // 결과값 계산 요청
      dispatcher.dispatch(calculateResult());

      // 결과값 반환 및 출력
      const result = calculatorStore.getResult();
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
