import { DEFAULT_SEPARATOR, CUSTOM_SEPARATOR } from './constant';
import extractCustomSeparator from './util/extract-custom-separator';
class InputParser {
  constructor(input) {
    this.input = input;
    this.value = [];
  }

  // 기본 구분자로 분리
  splitByDefaultSeparator() {
    this.value = this.input.split(DEFAULT_SEPARATOR);
  }

  // 커스텀 구분자로 분리
  splitByCustomSeparator() {
    this.value = this.input
      .replace(this.customMatch[0], '')
      .split(this.customMatch[1]);
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
