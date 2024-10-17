import { Console } from '@woowacourse/mission-utils';
import splitInputs from './components/splitInputs.js';
import splitCustom from './components/splitCustom.js';

class App {
  async run() {
    const inputs = await Console.readLineAsync(
      '문자열 덧셈 계산기를 실행합니다. 계산식을 입력해주세요.',
    );
    //유효성 검사
    if (inputs.includes(':') === true || inputs.includes(',') === true) {
      Console.print('결과: ' + splitInputs(inputs));
    } else {
      Console.print('결과: ' + splitCustom(inputs));
    }
  }
}

export default App;
