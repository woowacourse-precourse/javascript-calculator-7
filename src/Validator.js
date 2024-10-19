class Validator {
  validate(numbers) {
    // 연속된 구분자 예외 처리
    if (numbers.some((num) => num === "")) {
      throw new Error("[ERROR] 연속된 구분자는 사용할 수 없습니다.");
    }

    // 문자 예외 처리
    numbers.forEach((num) => {
      if (isNaN(Number(num))) {
        throw new Error("[ERROR] 문자는 입력할 수 없습니다.");
      }
    });

    // 음수 예외 처리
    if (numbers.some((num) => Number(num) <= 0)) {
      throw new Error("[ERROR] 양수만 입력할 수 있습니다.");
    }
  }
}

export default Validator;
