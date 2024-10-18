import { DEFAULT_DELIMITER, OPTIONS } from '../constant.js';
import ValidationError from '../error/ValidationError.js';

function findCustomDelimiterString(string) {
  const regExp = /\/\/.*\\n/;

  if (!regExp.test(string)) {
    return { customDelimiterString: null, numbers: string };
  }

  return {
    customDelimiterString: string.match(regExp)[0],
    numbers: string.replace(regExp, ''),
  };
}

function findCustomDelimiter(string) {
  const { customDelimiterString, numbers } = findCustomDelimiterString(string);
  const parsedCustomDelimiter = customDelimiterString
    ? [...customDelimiterString].slice(2, -2)
    : [];

  if (parsedCustomDelimiter.length > OPTIONS.MAX_CUSTOM_DELIMITER_LENGTH) {
    throw new ValidationError(
      `커스텀 구분자의 길이는 ${OPTIONS.MAX_CUSTOM_DELIMITER_LENGTH}자 이하여야 합니다.`
    );
  }

  return { customDelimiter: parsedCustomDelimiter.join(''), numbers: numbers };
}

export default function splitWithCustomDelimiter(string) {
  const { customDelimiter, numbers } = findCustomDelimiter(string);
  const defaultDelimiterString = DEFAULT_DELIMITER.join('|');
  const delimiterRegExp = new RegExp(
    customDelimiter
      ? `${defaultDelimiterString}|${customDelimiter}`
      : defaultDelimiterString
  );
  const numberRegExp = new RegExp('[0-9]');
  const numberArr = numbers.split(delimiterRegExp);

  numberArr.forEach((val) => {
    if (!numberRegExp.test(val)) {
      throw new ValidationError('입력 양식이 올바르지 않습니다.');
    }
  });

  return numberArr.map(BigInt);
}
