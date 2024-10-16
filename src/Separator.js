import { DEFAULT_SEPARATOR, CUSTOM_SEPARATOR } from './constant';
class Separator {
  constructor(input) {
    this.input = input;
    this.value = [];
  }

  // 기본 구분자로 분리
  splitByDefaultSeparator() {
    this.value = this.input.split(DEFAULT_SEPARATOR);
  }

  // 커스텀 구분자 확인
  hasCustomSeparator() {
    return CUSTOM_SEPARATOR.test(this.input);
  }

  // 커스텀 구분자로 분리
  splitByCustomSeparator() {}

  // 분리 실행
  separate() {
    if (this.hasCustomSeparator) this.splitByCustomSeparator();
    else this.splitByDefaultSeparator();

    return this.value;
  }
}
