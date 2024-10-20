import Constants from './Constants.js';

export function extractCustomDelimiter(input) {
  if (input.slice(0, 4) === '//\\n') {
    return input.slice(4);
  }

  if (input.slice(0, 2) !== '//') {
    return input;
  }

  if (input.slice(3, 5) !== '\\n') {
    throw new Error(Constants.ERROR_MESSAGE.INVALID_CUSTOM_DELIMITER);
  }

  if (input[2] >= '1' && input[2] <= '9') {
    throw new Error(Constants.ERROR_MESSAGE.INVALID_CUSTOM_DELIMITER);
  }

  Constants.addDelimiter(input[2]);
  return input.slice(5);
}

function validateArray(array) {
  array.forEach((element, index) => {
    if (element === '0') {
      throw new Error(Constants.ERROR_MESSAGE.INVALID_INPUT_TYPE);
    }

    if (element === '') {
      element = '0';
    }

    if (isNaN(element)) {
      throw new Error(Constants.ERROR_MESSAGE.INVALID_INPUT_TYPE);
    }

    if (element < 0) {
      throw new Error(Constants.ERROR_MESSAGE.INVALID_INPUT_TYPE);
    }

    array[index] = BigInt(element);
  });

  return array;
}

export function parseString(input) {
  // 정규식 구분자를 이스케이프 처리
  const escapedDelimiters = Constants.DELIMITER.map((delimiter) =>
    delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  );

  const delimiterPattern = new RegExp(escapedDelimiters.join('|'));
  const array = input.split(delimiterPattern);

  return validateArray(array);
}
