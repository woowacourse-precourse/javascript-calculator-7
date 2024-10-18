class Splitter {
  #separator = [",", ":"];

  splitToNumber(string) {
    // 구분자 업데이트해주기
    // 구분자를 사용해서 분리
    const splittedResult = this.#split(string);
    return Splitter.convertToNumber(splittedResult);
  }

  #split(string) {
    const splitRegex = new RegExp(`[${this.#separator.join("")}]`);
    return string.split(splitRegex);
  }

  static convertToNumber(splittedResult) {
    return splittedResult.map((element) => (element === "" ? 0 : parseInt(element, 10)));
  }
}

export default Splitter;
