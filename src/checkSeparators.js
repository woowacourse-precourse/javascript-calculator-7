const checkSeparators = input => {
  const match = input.match(/\/\/(.+)\\n/);

  if (match === null) {
    throw new Error('[ERROR] 유효하지 않은 구분자입니다.');
  }

  return new RegExp(`${match[1]}`);
};

export default checkSeparators;
