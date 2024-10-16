class Separator {
  constructor(input) {
    this.input = input;
    this.numbers = [];
  }

  // 기본 구분자로 분리
  splitByDefaultSeparator() {}

  // 커스텀 구분자 확인
  hasCustomSeparator() {}

  // 커스텀 구분자로 분리
  splitByCustomSeparator() {}

  // 분리 실행
  separate() {
    if (this.hasCustomSeparator) this.splitByCustomSeparator();
    else this.splitByDefaultSeparator();

    return this.numbers;
  }
}
