const extractNum = (input) => {
  let delimiter = /[,:]/;

  if (input.startsWith('//')) {
    const delimiterEnd = input.indexOf('\n');
    if (delimiterEnd !== -1) {
      const customDelimiter = input.slice(2, delimiterEnd);
      delimiter = new RegExp(`[${customDelimiter}]`);

      input = input.slice(delimiterEnd + 1);
    } else {
      new Error();
    }
  }

  const splitInput = input.split(delimiter);

  // 숫자인지 체크하고 아니면 throw error

  return splitInput.map(Number);
};

export default extractNum;
