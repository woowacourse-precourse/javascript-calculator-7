class Splitter {
  static #DEFAULT_DELIMITERS = [",", ":"];

  static splitInput(input) {
    const result = input.split("\\n");
    if (result.length > 2) throw new Error("[ERROR] 입력 문자열에 \'\\n\'이 2개 이상입니다.");
    if (result.length === 1) result.unshift("");
    return result;
  }

  static addDelimiter(delimiterSection) {
    if (delimiterSection === "") return;

    if (!delimiterSection.startsWith("//")) throw new Error("[ERROR] 커스텀 구분자 입력부는 문자열 앞에 위치하여 \"//\"로 시작하고 \"\\n\"으로 끝나야 합니다.");

    this.#DEFAULT_DELIMITERS.unshift(delimiterSection.slice(2));
  }

  static splitNumberSection(numberSection) {
    return this.#DEFAULT_DELIMITERS.reduce((acc, delimiter) => {
      return acc.flatMap(element => element.split(delimiter));
    }, [numberSection]);
  }
}

export default Splitter;