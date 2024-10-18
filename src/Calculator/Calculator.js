export default class Calculator {
  hasCustomPrefixSeparator(string) {
    return /^\/\/.+\\n.*/.test(string);
  }

  extractSeparator(string) {
    const seperators = string.split(/\/\/|\\n/);
    return seperators[1];
  }

  convertArray(string, separator) {
    const defaultArray = string.split(/,|;/);
    return defaultArray.flatMap((item) => item.split(separator));
  }

  validate(array) {
    if (array.some((item) => item === '')) {
      throw Error('[ERROR] 구분자 사이에 숫자가 없습니다.');
    }

    if (array.some((item) => Number(item) <= 0)) {
      throw Error('[ERROR] 숫자는 양수만 허용합니다.');
    }

    if (array.some((item) => Number.isNaN(Number(item)))) {
      throw Error('[ERROR] 구분자가 아닌 문자가 포함되어 있습니다.');
    }
  }
}
