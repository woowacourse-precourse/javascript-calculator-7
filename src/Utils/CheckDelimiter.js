const CheckDelimiter = str => {
  const findDelimiter = str.match(
    /(?<=\d+)(,)(?=\d+)|(?<=\d+)(:)(?=\d+)|(?<=\/\/)(.*?)(?=\\n)/g,
  );

  if (findDelimiter == null) {
    throw new Error(`[ERROR] 구분자 혹은 커스텀 구분자가 존재하지 않습니다.`);
  }

  const delimiterSet = new Set([...findDelimiter]);
  const findCustomRegex = /(?<=\/\/)(.*?)(?=\\n)/g.test(str);

  return [delimiterSet, findCustomRegex];
};

export default CheckDelimiter;
