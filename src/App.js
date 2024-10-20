import { MissionUtils } from '@woowacourse/mission-utils';


class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');

    try {
      const result = this.calculate(input);
      MissionUtils.Console.print(`결과 : ${result}`);
    } catch (e) {
      throw new Error('[ERROR] 잘못된 형식의 입력입니다.');
    }
  }

  calculate(input) {
    if (input === '') {
      return 0;
    }

    const delimiter = [',', ':'];

    if (input.startsWith('//')) {
      const match = input.match(/^\/\/(.)\\n(.*)$/);
      if (match) {
        const customDelimiter = match[1]; // // 뒤의 문자열을 구분자로 사용
        delimiter.push(customDelimiter);
        input = match[2]; // \n 이후의 문자열을 처리
      } else {
        throw new Error('[ERROR] 잘못된 형식의 입력입니다.');
      }
    }

    const pattern = new RegExp(`[${delimiter.join('')}]`);
    const numbers = input.split(pattern);

    return numbers.reduce((sum, number) => {
      const parsedNumber = parseInt(number, 10);
      if (parsedNumber < 0) {
        throw new Error('[ERROR] 음수는 입력할 수 없습니다.');
      }
      return sum + parsedNumber;
    }, 0);
  }
}

export default App;