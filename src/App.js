import { Console } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.prefixCustomSeparator = "//";
    this.suffixCustomSeparator = "\\n";
    this.defaultSeparators = ",:";
  }

  async run() {
    let input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    input = this.validateInitialInput(input);
    const splitInputBySeparators = this.parseInput(input);
    const sum = this.calculateSum(splitInputBySeparators);
    Console.print(`결과 : ${sum}`);
  }

  validateInitialInput(input) {
    if (/\s/.test(input)) {
      throw new Error("[ERROR] 공백이 포함될 수 없습니다.");
    }
    return input.length === 0 ? "0" : input;
  }

  parseInput(input) {
    return input.startsWith(this.prefixCustomSeparator)
      ? this.extractAndSplitByCustomSeparator(input)
      : this.extractAndSplitByDefaultSeparator(input);
  }

  getCustomSeparator(input) {
    const suffixCustomSeparatorIndex = input.indexOf(
      this.suffixCustomSeparator
    );
    if (suffixCustomSeparatorIndex === -1) {
      throw new Error("[ERROR] 잘못된 커스텀 구분자 형식입니다.");
    }
    const costomSeparator = input.slice(2, suffixCustomSeparatorIndex);
    if (costomSeparator === "") {
      throw new Error("[ERROR] 빈 구분자는 허용되지 않습니다.");
    }
    return costomSeparator;
  }

  extractAndSplitByCustomSeparator(input) {
    const customSeparator = this.getCustomSeparator(input);
    const extractInputWithoutCustomSeparator = input.slice(
      input.indexOf(this.suffixCustomSeparator) + 2
    );
    const splitInputBySeparators = this.splitInputBySeparators(
      extractInputWithoutCustomSeparator,
      customSeparator
    );
    return splitInputBySeparators;
  }

  extractAndSplitByDefaultSeparator(input) {
    const splitInputBySeparators = this.splitInputBySeparators(
      input,
      this.defaultSeparators
    );
    return splitInputBySeparators;
  }

  splitInputBySeparators(input, separator) {
    const pattern = `[${separator}${this.defaultSeparators}]`;
    return input.split(new RegExp(pattern));
  }

  calculateSum(numbers) {
    return numbers.map(this.convertToNumber).reduce((sum, num) => sum + num, 0);
  }

  convertToNumber(str) {
    const number = Number(str);
    if (isNaN(number)) {
      throw new Error("[ERROR] 구분자와 숫자가 아닌 값은 포함될 수 없습니다.");
    }
    if (number < 0) {
      throw new Error("[ERROR] 음수는 허용되지 않습니다.");
    }
    return number;
  }
}

export default App;
