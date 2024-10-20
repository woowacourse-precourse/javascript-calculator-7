import { Console } from '@woowacourse/mission-utils';

class StringCalculator {
  static #DEFAULT_DELIMITERS = [',', ':'];

  static #CUSTOM_DELIMITER_REGEXP = /^\/\/.+\\n/;

  constructor() {
    this.delimiters = [...StringCalculator.#DEFAULT_DELIMITERS];
  }

  calculation(input) {
    let parsedInputs = input;

    if (this.isCustomDelimiterPresent(input)) {
      this.setDelimiters(this.parseCustomDelimiter(input));
      parsedInputs = this.removeCustomDelimiter(input);
    }

    const delimeterRegExp = this.getDelimiterRegExp();
    const splitInput = parsedInputs.split(delimeterRegExp);

    const nums = this.getNums(splitInput);

    const sum = this.add(nums);

    this.printSum(sum);
  }

  isCustomDelimiterPresent(input) {
    return StringCalculator.#CUSTOM_DELIMITER_REGEXP.test(input);
  }

  setDelimiters(newDelimiter) {
    this.delimiters.push(newDelimiter);
  }

  parseCustomDelimiter(input) {
    const str = input.match(StringCalculator.#CUSTOM_DELIMITER_REGEXP)[0];

    const regexp = /[/\\n]/g;
    return str.replace(regexp, '');
  }

  removeCustomDelimiter(input) {
    return input.replace(StringCalculator.#CUSTOM_DELIMITER_REGEXP, '');
  }

  getNums(arr) {
    return arr.map(n => {
      const num = Number(n);

      if (num < 0) throw new Error(`[ERROR]`);
      if (Number.isNaN(num)) throw new Error(`[ERROR]`);
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
