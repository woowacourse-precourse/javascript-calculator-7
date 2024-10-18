import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const input = await Console.readLineAsync('입력 값을 입력하세요: ');
    var number = input.split(/[,|:]/).map(Number);
    var sum = 0;
    for (let i=0; i<number.length; i++){
      sum += number[i];
    }
    console.log(sum);
  }
}

export default App;
