import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    Console.print('계산할 문자열을 입력해 주세요');
    const input = await Console.readLineAsync('');
    if (!input) {
      throw new Error('[Error] 문자열이 입력되지 않았습니다.');
    }
  }
}

export default App;
