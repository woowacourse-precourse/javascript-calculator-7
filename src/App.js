import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      const result = this.calculateSum(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  calculateSum(input) {
    if (input === '') return 0;
  
    // 쉼표(,)와 콜론(:) 구분자 지원
    const numbers = input.split(/,|:/);
    const sum = numbers.reduce((acc, number) => acc + Number(number), 0);
  
    return sum;
  }
  
}

const app = new App();
app.run();

export default App;
