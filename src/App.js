import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    Console.print('덧셈할 문자열을 입력해 주세요.');
    const input = await Console.readLineAsync('');

    if (input === "") { //빈문자열 처리
      return 0;
    }

    try {
      this.sum(input);
    }
    catch (error) {
      Console.error(error);
    }
  }

  sum(input) { //덧셈 함수
    const delimiters = /[,|:]/;
    const numbers = input.split(delimiters).map(Number);
    Console.print("결과 : " + numbers.reduce((sum, number) => sum + number, 0));
  }
}

export default App;
