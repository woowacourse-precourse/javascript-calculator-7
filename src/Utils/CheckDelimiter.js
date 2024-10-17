const CheckDelimiter = str => {
  const findDelimiter = str.match(
    /(?<=\d+)(,)(?=\d+)|(?<=\d+)(:)(?=\d+)|(?<=\/\/)(.*?)(?=\\n)/g,
  );

  if (findDelimiter.length > 0) {
    const delimiterSet = new Set([...findDelimiter]);
    return delimiterSet;
  }

  throw new Error(`[ERROR] 구분자 혹은 커스텀 구분자가 존재하지 않습니다.`);
};

export default CheckDelimiter;
