const addCustomDelimiter = (input, delimiter) => {
  let customDelimiter = '';
  const newlineReplacedInput = input.replace(/\\n/, '\n');
  for (let idx = 2; idx < newlineReplacedInput.length; idx += 1) {
    const char = newlineReplacedInput[idx];
    if (char === '\n') {
      break;
    }
    if (char === ' ') {
      throw new Error('[ERROR] 커스텀 구분자에 공백이 포함될 수 없습니다.');
    }
    if (/\d/.test(char)) {
      throw new Error('[ERROR] 커스텀 구분자에 숫자가 포함될 수 없습니다.');
    }
    customDelimiter += newlineReplacedInput[idx];
  }
  delimiter.push(customDelimiter);
  return delimiter;
};

export default addCustomDelimiter;
