import { DEFAULT_SEPARATOR, CUSTOM_SEPARATOR } from './constant';
class InputParser {
  constructor(input) {
    this.input = input;
    this.value = [];
    this.customMatch;
  }

  // 기본 구분자로 분리
  splitByDefaultSeparator() {
    this.value = this.input.split(DEFAULT_SEPARATOR);
  }

  // 커스텀 구분자 추출 및 확인
  hasCustomSeparator() {
    this.customMatch = this.input.match(CUSTOM_SEPARATOR);
    if (!this.customMatch) return false;
    return true;
  }

  // 커스텀 구분자로 분리
  splitByCustomSeparator() {
    this.value = this.input
      .replace(this.customMatch[0], '')
      .split(this.customMatch[1]);
  }

  // 분리 실행
  separate() {
    if (this.hasCustomSeparator()) this.splitByCustomSeparator();
    else this.splitByDefaultSeparator();

    return this.value;
  }
}

export default InputParser;
