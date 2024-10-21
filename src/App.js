import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const input = await Console.readLineAsync('입력: ');
    const numbers = input.split(/,|:/).map(Number);
    Console.print(numbers);
  }
}

export default App;
