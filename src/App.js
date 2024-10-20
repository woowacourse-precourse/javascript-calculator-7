import '@woowacourse/mission-utils';
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    let input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    input = input.replace(/\\n/g, '\n');
    let sum = 0;
    let parsedInput = input;
    let delimiter = /[,:]/;
    
    if (input === '') {
      Console.print('결과 : 0');
      return;
    }

    if (input.startsWith('//')) {
      const customInput = input.split('\n');
      if (customInput.length < 2) {
        throw new Error('[ERROR] 유효하지 않은 커스텀 구분자입니다.');
      }
      let customDelimiter = customInput[0].slice(2);
      delimiter = new RegExp(customDelimiter);
      parsedInput = customInput[1];
    }

    const splitNumbers = parsedInput.split(delimiter);

    const numbers = splitNumbers.map(num => {
      if (num === '' || isNaN(num)) {
        throw new Error('[ERROR] 유효하지 않은 숫자가 포함되어 있습니다.');
      }
      const number = Number(num);
      if (number < 0) {
        throw new Error('[ERROR] 음수는 입력할 수 없습니다.');
      }
      return number;
    });
    

    numbers.forEach(num => {
      sum += num;
    });
    Console.print(`결과 : ${sum}`);
  }
}

export default App;
