const ValidateInputData = (str, delimiterSet, findCustom) => {
  const pattern = new RegExp(
    `[^${[...new Set([...delimiterSet])].join('|')}|\\d+${findCustom ? '|//|\\\\n' : ''}]`,
    'g',
  );

  if (str.match(pattern) === null) {
    return str.match(/\d+/g);
  }

  throw new Error(`[ERROR] 구분자와 양수 이외에 문자가 포함되어있습니다.`);
};

export default ValidateInputData;
