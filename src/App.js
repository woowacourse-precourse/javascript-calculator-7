import { Console } from '@woowacourse/mission-utils';

class App {
  add(nums) {
    return nums.reduce((acc, curr) => acc + curr, 0);
  }

  isCustomDelimiterPresent(str, regexp) {
    return regexp.test(str);
  }

  getCustomDelimiter(str) {
    const regexp = /[/\\n]/g;
    return str.replace(regexp, '');
  }

  printSum(res) {
    Console.print(`결과 : ${res}`);
  }

  async run() {
    const str = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    const delimeters = [',', ':'];
    const customRegexp = /^\/\/.+\\n/;

    let parsed = str;

    if (this.isCustomDelimiterPresent(str, customRegexp)) {
      delimeters.push(this.getCustomDelimiter(str.match(customRegexp)[0]));
      parsed = str.replace(customRegexp, '');
    }

    const delimeterRegexp = new RegExp(`[${delimeters.join('')}]`, 'g');

    const splited = parsed.split(delimeterRegexp);
    const nums = splited.map(n => {
      const num = Number(n);

      if (num < 0) throw new Error('[ERROR]');
      if (Number.isNaN(num)) throw new Error('[ERROR]');
      return num;
    });

    const addRes = this.add(nums);

    this.printSum(addRes);
  }
}

export default App;
