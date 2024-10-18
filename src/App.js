// import { Console } from '@woowacourse/mission-utils';
// class App {

// }
// export default App;

import { Console } from '@woowacourse/mission-utils';
class App {
   async run() {
      Console.print('덧셈할 문자열을 입력해 주세요:');
      const input = await Console.readLineAsync(''); // 사용자 입력을 비동기적으로 받기
      this.calculateSum(input);
   }
}
export default App;
