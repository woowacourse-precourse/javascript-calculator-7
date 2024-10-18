import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    Console.print('계산할 문자열을 입력해 주세요');
    const input = await Console.readLineAsync('');
    if (!input) {
      throw new Error('[Error] 문자열이 입력되지 않았습니다.');
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
          throw new Error('[Error] \\n이 입력되지 않았습니다.');
        }
        throw new Error('[Error] 커스텀 구분자가 입력되지 않았습니다.');
      }

      nums = input
        .split('\\n')[1]
        .split(createSeparatorPattern(customSeparator[1]));
    } else {
      nums = input.split(createSeparatorPattern());
    }
    const result = nums.reduce((hap, num) => {
      if (isNaN(num)) {
        throw new Error('[Error] 잘못된 값이 입력되었습니다.');
      }
      hap += Number(num);
      return hap;
    }, 0);
  }
}

export default App;
