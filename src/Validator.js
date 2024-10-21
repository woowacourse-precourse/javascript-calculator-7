class Validator {
  validateCustomSeparator(customSeparator) {
    if (customSeparator === null) {
      throw new Error("올바르지 않은 커스텀 구분자 형식입니다.");
    }
  }

  validateNumbers(arr) {
    arr.forEach((num, i) => {
      if (i === 0) this.checkFirst(num);
      if (i === arr.length - 1) this.checkEnd(num);
      this.checkEmpty(num);
      this.checkEnd(num, i, arr.length - 1);
      this.checkWhiteSpace(num);
      this.checkIsNumber(num);
      this.checkNegativeNumber(num);
    });
  }

  checkFirst(num) {
    if (num === "") {
      throw new Error("첫 글자가 구분자일 수 없습니다.");
    }
  }
  checkEnd(num) {
    if (num === "") {
      throw new Error("마지막 글자가 구분자일 수 없습니다.");
    }
  }
  checkEmpty(num) {
    if (num === "") {
      throw new Error("구분자를 연속해서 작성할 수 없습니다.");
    }
  }

  checkWhiteSpace(num) {
    if (num.includes(" ")) {
      throw new Error("구분자와 구분자 사이에 공백문자가 들어가 있습니다.");
    }
  }

  checkIsNumber(num) {
    if (isNaN(Number(num))) {
      throw new Error("숫자가 아닌 다른 값이 포함되어 있습니다.");
    }
  }

  checkNegativeNumber(num) {
    if (Number(num) < 0) {
      throw new Error("음수는 입력할 수 없습니다.");
    }
  }
}

export default Validator;
