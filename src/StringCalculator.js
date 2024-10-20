import { Console } from '@woowacourse/mission-utils';

class StringCalculator {
  constructor() {
    this.delimiters = [',', ':'];

    this._customRegexp = /^\/\/.+\\n/;
  }

  calculation(input) {
    let parsedNums = input;

    if (this.isCustomDelimiterPresent(input)) {
      this.setDelimiters(this.parseCustomDelimiter(input));
      parsedNums = this.removeCustomDelimiter(input);
    }

    const delimeterRegExp = this.getDelimiterRegExp();
    const splited = parsedNums.split(delimeterRegExp);

    const nums = this.getNums(splited);

    const addRes = this.add(nums);

    this.printSum(addRes);
  }

  isCustomDelimiterPresent(input) {
    return this._customRegexp.test(input);
  }

  setDelimiters(newDelimiter) {
    this.delimiters.push(newDelimiter);
  }

  parseCustomDelimiter(input) {
    const str = input.match(this._customRegexp)[0];

    const regexp = /[/\\n]/g;
    return str.replace(regexp, '');
  }

  removeCustomDelimiter(input) {
    return input.replace(this._customRegexp, '');
  }

  getNums(arr) {
    return arr.map(n => {
      const num = Number(n);

      if (num < 0) throw new Error('[ERROR] 숫자는 양수만 입력이 가능합니다.');
      if (Number.isNaN(num))
        throw new Error('[ERROR] 숫자가 아닌 값이 입력됐습니다.');
      return num;
    });
  }

  add(nums) {
    return nums.reduce((acc, curr) => acc + curr, 0);
  }

  getDelimiterRegExp() {
    return new RegExp(`[${this.delimiters.join('')}]`, 'g');
  }

  printSum(res) {
    Console.print(`결과 : ${res}`);
  }
}

export default StringCalculator;
