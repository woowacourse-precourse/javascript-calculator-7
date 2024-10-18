export class Calculator {
  constructor() {
    this.calculationString = '';
    this.result = 0;
    this.separatorPattern = ',|:';
  }

  // 문자열의 시작이 '/'인지 확인하여 커스텀 구분자 사용 여부를 반환
  hasCustomSeparator() {
    const pattern = new RegExp('^/');
    return pattern.test(this.calculationString);
  }

  // 커스텀 구분자를 설정하고, 계산할 문자열을 추출
  setCustomSeparator() {
    const customSeparatorPattern = new RegExp('^//(.+?)\\\\n([\\s\\S]*)');
    const isCustomSeparatorMatch = this.calculationString.match(
      customSeparatorPattern
    );

    if (isCustomSeparatorMatch) {
      // 커스텀 구분자 유효성 확인
      const customSeparator = isCustomSeparatorMatch[1].trim();
      if (customSeparator.length > 1) {
        throw new Error('[ERROR] 커스텀 구분자는 단일 문자를 사용해야합니다.');
      }

      if (!isNaN(Number(customSeparator))) {
        throw new Error('[ERROR] 커스텀 구분자는 숫자를 사용할 수 없습니다.');
      }

      // 정규식 표현에 커스텀 구분자 추가
      this.separatorPattern += '|\\' + customSeparator;

      // 계산할 문자열을 업데이트
      this.calculationString = isCustomSeparatorMatch[2].trim();
    } else {
      throw new Error(
        '[ERROR] 커스텀 구분자 지정 형식에 맞지 않거나 커스텀 구분자가 작성되지 않았습니다.'
      );
    }
  }

  // 구분자를 사용해 계산할 문자열을 숫자로 변환하고, 덧셈을 수행
  calculateString() {
    const calculationArr = this.calculationString.split(
      new RegExp(`[${this.separatorPattern}]`)
    );

    // 배열의 각 요소를 숫자로 변환하고 유효성 검사 후 반환
    calculationArr
      .filter((element) => element !== '')
      .forEach((element) => {
        const num = Number(element);

        if (isNaN(num)) {
          throw new Error(
            '[ERROR] 입력 문자열에 유효하지 않은 구분자가 있습니다.'
          );
        }

        if (num <= 0) {
          throw new Error(
            '[ERROR] 입력 문자열에 0이나 음수가 포함되어 있습니다.'
          );
        }

        this.result += num;
      });
  }

  // 입력 문자열을 처리하여 결과를 반환
  calculate(inputString) {
    if (inputString !== '') {
      this.calculationString = inputString;
      if (this.hasCustomSeparator()) {
        this.setCustomSeparator();
      }
      this.calculateString();
    }

    return this.result;
  }
}
