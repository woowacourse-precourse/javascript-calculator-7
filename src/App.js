import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    let input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    input = this.validateInitialInput(input);
    const splitInputBySeparators = this.parseInput(input);
  }

  validateInitialInput(input) {
    if (/\s/.test(input)) {
      throw new Error("[ERROR] 공백이 포함될 수 없습니다.");
    }
    return input.length === 0 ? 0 : input;
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
}

export default App;
