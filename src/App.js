import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      const result = this.add(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
    }

  }

  add(numbers) {
    if(numbers === '') return 0;

    const { separator, numStr } = this.customSeparator(numbers);
    const numArr = numStr.split(new RegExp(`[${separator}]`)).map( num => {
      const parsedNum = Number(num);
      if(isNaN(parsedNum) || parsedNum < 0) {
        throw new Error('[ERROR] 유효하지 않은 입력입니다.');
      }
      return parsedNum;
    });
    return numArr.reduce((acc, num) => acc + num, 0);
  }

  customSeparator(numbers) {
    if(numbers.startsWith('//')) {
      const endIndex = numbers.indexOf('\\n');
      const separator = numbers.substring(2, endIndex);
      const numStr = numbers.slice(endIndex + 2);
      return { separator, numStr }
    }
    return { separator: ',|:', numStr: numbers };
  }

}

export default App;
