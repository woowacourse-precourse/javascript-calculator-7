// 커스텀 구분자 유효성 구분 함수
const validateCustomSeparator = (input, customSeparator) => {
  if (!customSeparator) {
    if (!input.match(/\\n/)) {
      throw new Error('[ERROR] \\n이 입력되지 않았습니다.');
    }
    throw new Error('[ERROR] 커스텀 구분자가 입력되지 않았습니다.');
  }
  if (!isNaN(customSeparator[1])) {
    throw new Error('[ERROR] 커스텀 구분자는 문자나 특수문자만 가능합니다.');
  }
};

//커스텀 구분자가 있으면 커스텀 구분자를 반환하는 함수
const extractCustomSeparator = input => {
  if (input.startsWith('//')) {
    const customSeparator = input.match(/^\/\/(.+?)\\n/);
    validateCustomSeparator(input, customSeparator);

    return customSeparator[1].replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }
  return null;
};

// input을 구분자를 바탕으로 분리하는 함수
const splitInput = input => {
  const separator = [',', ':'];
  const customSeparator = extractCustomSeparator(input);

  if (customSeparator) {
    separator.push(customSeparator);
    input = input.split('\\n')[1];
  }

  const separatorRegExp = new RegExp(separator.join('|'));
  return input.split(separatorRegExp);
};

export default splitInput;
