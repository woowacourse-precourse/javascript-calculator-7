import { DEFAULT_SEPARATOR, CUSTOM_SEPARATOR } from './constant';
class Separator {
  constructor(input) {
    this.input = input;
    this.value = [];
    this.customSeparator = '';
  }

  // 기본 구분자로 분리
  splitByDefaultSeparator() {
    this.value = this.input.split(DEFAULT_SEPARATOR);
  }

  // 커스텀 구분자 추출 및 확인
  hasCustomSeparator() {
    const match = CUSTOM_SEPARATOR.match(this.input);
    if (!match) return false;
    this.customSeparator = match[1];
    return true;
  }

  // 커스텀 구분자로 분리
  splitByCustomSeparator() {
    this.value = this.input.split(this.customSeparator);
  }

  // 분리 실행
  separate() {
    if (this.hasCustomSeparator) this.splitByCustomSeparator();
    else this.splitByDefaultSeparator();

    return this.value;
  }
}
