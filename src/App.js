import { Console } from '@woowacourse/mission-utils';

class App {
  run() {
    Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n', (input) => {
      try {
        const result = this.calculateSum(input);
        Console.print(결과 : ${result});
      } catch (error) {
        Console.print([ERROR] ${error.message});
      }
    });
  }

  calculateSum(input) {
    if (input === '') return 0;

    const { numbers, delimiter } = this.parseInput(input);

    const sum = numbers.reduce((acc, number) => {
      const parsedNumber = Number(number);
      if (isNaN(parsedNumber) || parsedNumber < 0) {
        throw new Error('잘못된 입력입니다.');
      }
      return acc + parsedNumber;
    }, 0);

    return sum;
  }

  parseInput(input) {
    let delimiter = /,|:/; // 기본 구분자: 쉼표와 콜론
    let numbers = input;

    // 커스텀 구분자 확인
    if (input.startsWith('//')) {
      const endOfDelimiterIndex = input.indexOf('\n');
      if (endOfDelimiterIndex === -1) {
        throw new Error('커스텀 구분자 형식이 잘못되었습니다.');
      }
      delimiter = input.substring(2, endOfDelimiterIndex); // 커스텀 구분자 추출
      numbers = input.substring(endOfDelimiterIndex + 1); // 구분자 뒤의 숫자 문자열 추출
    }

    // 구분자를 기준으로 문자열을 분리
    numbers = numbers.split(new RegExp([${delimiter}]));

    return { numbers, delimiter };
  }
}

const app = new App();
app.run();

export default App;
