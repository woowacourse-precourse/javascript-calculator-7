export class Calculator {
  calculate(input) {
    const sliceNumbers = this.testRegex(input);
    if (sliceNumbers.length === 0) return `결과 : 0`;
    if (sliceNumbers.error) {
      return false;
    }
    return `결과 : ${this.add(...sliceNumbers.numbers)}`;
  }

  testRegex(input) {
    if (input == "") return 0;
    if (input.length > 10000) return { error: true };
    let regexText = /[,:]/; // 기본 구분자 설정
    let result = "";
    // 커스텀 구분자 확인
    if (this.checkCustom(input)) result = this.checkCustom(input);
    // 기본 구분자
    else result = input.split(regexText);
    // result type :  array<string>
    result = this.changeFloat(result);
    if (this.checkNotNum(result)) return { error: true }; // 숫자아닌지 체크
    if (this.checkMin(result)) return { error: true }; // 음수 체크
    return { error: false, numbers: result };
  }

  // 커스텀 구분자 확인 함수
  checkCustom(string) {
    let customInput = string.match(/^\/\/(.)\\n/); // ; 추출
    //  커스텀 구분자가 숫자일때 false 출력
    if (isNaN(customInput)) return false;
    // 커스텀 구분자가 있는 케이스
    if (customInput) {
      let sliceInput = string.split("\\n")[1];
      const regexText = new RegExp(`[${customInput[1]},:]`); // 정규식 생성
      const result = sliceInput.split(regexText);
      return result;
    }
    return false;
  }

  // 소수는 소수로 정수는 정수로 형변환
  changeFloat(result) {
    const newResult = result.map((number) => {
      let preNum = parseFloat(number);
      if ((preNum * 10) % 10 == 0) {
        preNum = parseInt(preNum);
      }
      return preNum;
    });
    return newResult;
  }

  // 숫자 아닌 값 확인
  checkNotNum(result) {
    for (let index = 0; index < result.length; index++) {
      if (Number.isNaN(result[index])) return true;
    }
    return false;
  }

  // 음수 확인
  checkMin(result) {
    for (let index = 0; index < result.length; index++) {
      if (result[index] < 0) return true;
    }
    return false;
  }

  // add 함수내 파라미터를 레스트 파라미터로 설정
  add(...numbers) {
    let result = 0;
    numbers.forEach((number) => {
      result += number;
    });
    return result;
  }
}
