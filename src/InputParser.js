import { SEPARATOR } from './constant';
import extractCustomSeparator from './util/extract-custom-separator';
class InputParser {
  constructor(input) {
    this.input = input;
    this.value = [];
  }

  // 기본 구분자로 분리
  splitByDefaultSeparator() {
    this.value = this.input.split(SEPARATOR.DEFAULT);
  }

  // 커스텀 구분자로 분리
  splitByCustomSeparator() {
    const inputValue = this.input.replace(this.customMatch[0], '');
    this.value = inputValue.split(this.customMatch[1]);
  }

  // 분리 실행
  separate() {
    const customSeparatorResult = extractCustomSeparator(this.input);
    if (customSeparatorResult) {
      const { separator, inputWithoutSeparator } = customSeparatorResult;
      this.value = inputWithoutSeparator.split(separator);
    } else {
      this.splitByDefaultSeparator();
    }

    return this.value;
  }
}

export default InputParser;
