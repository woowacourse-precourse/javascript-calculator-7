//예외 처리 로직
class ExceptionCheck {
  //문자열 형식 체크
  static validate(input) {
    if (typeof input !== "string") {
      throw new Error("[ERROR] : 잘못된 값을 입력하였습니다.");
    }
  }

  static validateNumbers(numbers) {
    // 음수 체크
    const negativeNumbers = numbers.filter((num) => Number(num) < 0);
    if (negativeNumbers.length > 0) {
      throw new Error("[ERROR] : 양수만 입력하세요");
    }

    // 숫자 체크
    numbers.forEach((num) => {
      if (isNaN(Number(num))) {
        throw new Error("[ERROR] : 잘못된 값을 입력하였습니다.");
      }
    });
  }
}

export default ExceptionCheck;
