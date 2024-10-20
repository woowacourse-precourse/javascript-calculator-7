import REGEX from '../constants/regex.js';

export default function splitByCustomSeparator(str) {
  const match = str.match(REGEX.CUSTOM_SEPARATOR);

  if (match) {
    const separator = match[1];
    const remainingStr = str.slice(match[0].length);

    if (REGEX.POSITIVE_INTEGER.test(separator) || separator === '') {
      return '커스텀 구분자 또는 입력값을 확인해주세요.(숫자는 커스텀 구분자로 사용할 수 없어요.)';
    }

    return remainingStr.split(separator);
  }
  return '커스텀 구분자를 확인할 수 없어요.';
}
