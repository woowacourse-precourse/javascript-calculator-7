class NumberArr {
  constructor() {
    this.regexp = null;
  }

  makeRegexp(customSeparator, IS_CUSTOM) {
    this.regexp = new RegExp(`[,:${customSeparator}]`);
    if (customSeparator == "" && IS_CUSTOM) this.regexp = /(?=.)/;
  }

  makeNumArr(string) {
    const numArr = string.split(this.regexp).map((num) => {
      if (num < 0) {
        throw new Error("[ERROR]양수로 구성된 문자열을 입력해주세요.");
      } else if (isNaN(num)) {
        throw new Error("[ERROR]구분자의 범위를 벗어났습니다.");
      }
      return Number(num);
    });

    return numArr;
  }
}

export default NumberArr;
