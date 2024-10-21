const extractNum = (input) => {
  let delimiter = /[,:]/;

  if (input.startsWith('//')) {
    const delimiterEnd = input.indexOf('\\n');
    if (delimiterEnd !== -1) {
      let customDelimiter = input.slice(2, delimiterEnd);
      // 특수문자 정규표현식 오류 처리
      customDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      delimiter = new RegExp(`[${customDelimiter}]`);

      input = input.slice(delimiterEnd + 2);
    } else {
      throw new Error('[ERROR]');
    }
  }

  const splitInput = input.split(delimiter);

  // 숫자인지 체크하고 아니면 throw error
  const numbers = splitInput
    .map((num) => num.trim())
    .map((num) => {
      if (isNaN(num) || num === '' || Number(num) <= 0) {
        throw new Error('[ERROR]');
      }
      return Number(num);
    });

  return numbers;
};

export default extractNum;
