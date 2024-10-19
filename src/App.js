import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const input =
      await Console.readLineAsync('계산할 문자열을 입력해 주세요\n');
    if (!input) {
      throw new Error('[ERROR] 문자열이 입력되지 않았습니다.');
    }

    const createSeparatorPattern = customSeparator => {
      const separator = [',', ':'];
      if (customSeparator) {
        separator.push(customSeparator);
      }
      return new RegExp(separator.join('|'));
    };
    let nums = [];

    if (input.match(/^\/\//)) {
      const customSeparator = input.match(/^\/\/(.+?)\\n/);

      if (!customSeparator) {
        if (!input.match(/\\n/)) {
          throw new Error('[ERROR] \\n이 입력되지 않았습니다.');
        }
        throw new Error('[ERROR] 커스텀 구분자가 입력되지 않았습니다.');
      }

      nums = input
        .split('\\n')[1]
        .split(createSeparatorPattern(customSeparator[1]));
    } else {
      nums = input.split(createSeparatorPattern());
    }
    const result = nums.reduce((hap, num) => {
      const number = Number(num);
      if (isNaN(number)) {
        throw new Error('[ERROR] 문자열이 아닌 숫자를 입력해 주세요.');
      }
      if (number < 0) {
        throw new Error('[ERROR] 음수가 아닌 양수를 입력해 주세요.');
      }
      hap += number;
      return hap;
    }, 0);
    Console.print(`결과 : ${result}`);
  }
}

export default App;
