const extractNum = (input) => {
  let delimiter = /[,:]/;

  if (input.startsWith('//')) {
    const delimiterEnd = input.indexOf('\n');
    console.log(delimiterEnd);
    if (delimiterEnd !== -1) {
      const customDelimiter = input.slice(2, delimiterEnd);
      delimiter = new RegExp(`[${customDelimiter}]`);

      input = input.slice(delimiterEnd + 1);
    } else {
      throw new Error('[ERROR] 커스텀 구분자가 마무리 되지 않았습니다!!!');
    }
  }

  const splitInput = input.split(delimiter);

  // 숫자인지 체크하고 아니면 throw error
  const numbers = splitInput
    .map((num) => num.trim())
    .map((num) => {
      if (isNaN(num) || num === '') {
        throw new Error(
          '[ERROR] 입력 값 형식이 올바르지 않습니다!!!(숫자 추출 오류)',
        );
      }
      return Number(num);
    });

  return numbers;
};

export default extractNum;
