class Separator {
  #separators;

  constructor() {
    // 중복된 커스텀 구분자가 들어올 것을 대비한 Set 자료구조
    this.#separators = new Set([',', ':']);
  }

  addCustomSeparator(inputStr) {
    // //구분자\n 의 정규표현식
    const customSeparatorPattern = /^\/\/(.)\\n/;
    const customSeparatorMatch = inputStr.match(customSeparatorPattern);

    // 커스텀 구분자가 없는 경우 문자열 그대로 반환
    if (!customSeparatorMatch) {
      return inputStr;
    }

    const customSeparator = customSeparatorMatch[1];
    this.#separators.add(customSeparator);

    // 커스텀 구분자 문자열을 제외한 문자열 반환
    return inputStr.slice(customSeparatorMatch[0].length);
  }

  getSeparatorPattern() {
    // 구분자들을 |으로 연결해 정규식 패턴으로 반환
    return [...this.#separators].join('|');
  }
}

export default Separator;
