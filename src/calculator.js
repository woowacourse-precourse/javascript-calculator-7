export default class Calculator {
  constructor(input) {
    this.inputString = input;
  }

  async parseNumber() {
    // 커스텀 구분자 확인
    let customSeparator = "";
    const regex = /^\/\/.*\\n$/;

    if (regex.test(this.inputString.toString().slice(0, 5))) {
      customSeparator = this.inputString[2];
      this.inputString = this.inputString.substring(5);
    }

    let separatorReg = new RegExp(`[,:${customSeparator}]`);

    return this.inputString.split(separatorReg).map(Number);
  }
}
