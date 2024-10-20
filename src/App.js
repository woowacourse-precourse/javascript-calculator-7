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
  parseInput(input) {
    let delimiter = /,|:/; // 기본 구분자: 쉼표와 콜론
    let numbers = input;
  
    // 커스텀 구분자 확인
    if (input.startsWith('//')) {
      const endOfDelimiterIndex = input.indexOf('\n');
      delimiter = input.substring(2, endOfDelimiterIndex); // 커스텀 구분자 추출
      numbers = input.substring(endOfDelimiterIndex + 1); // 구분자 뒤의 숫자 추출
    }
  
    return numbers.split(new RegExp(`[${delimiter}]`));
  }
  
  }


const app = new App();
app.run();

export default App;
