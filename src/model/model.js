class Model {
  delimiter = new Set([",", ":"]);

  addDelimiter(stringArray) {
    stringArray.forEach((string) => this.delimiter.add(string));
  }

  calculate(string) {
    const stringArray = this.splitStringWithDelimiter(string);
    this.checkStringChangeWithNumber(stringArray);
    return stringArray.reduce((acc, cur) => +cur + +acc, 0);
  }

  splitStringWithDelimiter(string) {
    const regex = new RegExp(`[${[...this.delimiter].join("")}]`);

    return string.split(regex);
  }

  checkStringChangeWithNumber(stringArray) {
    if (stringArray.filter((string) => isNaN(+string)).length > 0) {
      throwError("구분자 외에 다른 문자열은 계산 부분에 들어올 수 없습니다.");
    }
  }
}

export default Model;
