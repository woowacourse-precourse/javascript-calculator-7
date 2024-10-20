class Calculator {
  add(input) {
    let delimiters = [',', ':']; // 기본 구분자
    let beforeDelimiter = ''; // // 앞의 문자열
    let afterDelimiter = ''; // \n 뒤의 문자열

    // //와 \n을 기준으로 문자열을 나눔
    const parts = input.split('//');

    if (parts.length > 1) {
      // // 앞부분 저장
      beforeDelimiter = parts[0].trim();

      // \n 찾기
      const afterDelimiterParts = parts[1].split(/\\n/);

      if (afterDelimiterParts.length > 1) {
        afterDelimiter = afterDelimiterParts[1].trim(); // \n 뒷부분 저장
      } else {
        // 만약 \n 뒤에 숫자가 없고 구분자만 있는 경우 처리
        afterDelimiter = afterDelimiterParts[0].trim();
      }
    } else {
      // 커스텀 구분자가 없는 경우
      beforeDelimiter = input;
    }

    // 기본 구분자로 숫자들을 분리
    const regex = new RegExp(`[${delimiters.join('')}]`);

    // // 앞의 숫자 부분 처리
    const beforeNumbers = beforeDelimiter.split(regex).filter(Boolean);

    // \n 뒤의 숫자 부분 처리
    const afterNumbers = afterDelimiter.split(regex).filter(Boolean);

    // 두 부분을 합쳐서 계산
    const allNumbers = [...beforeNumbers, ...afterNumbers];

    // 숫자 합산
    let sum = 0;
    allNumbers.forEach((num) => {
      if (!this.isValidNumber(num)) {
        if (this.isNegative(num)) {
          throw new Error('[ERROR] 음수는 입력할 수 없습니다.');
        } else {
          throw new Error('[ERROR] 양수와 구분자만 입력 가능합니다.');
        }
      }
      sum += parseInt(num, 10);
    });

    return sum;
  }

  // 숫자가 유효한지 확인 (양수만 허용)
  isValidNumber(value) {
    return /^\d+$/.test(value);
  }

  // 음수인지 확인
  isNegative(value) {
    return /^-\d+$/.test(value);
  }
}

export default Calculator;
