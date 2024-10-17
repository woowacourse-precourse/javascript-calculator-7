const CheckDelimiter = str => {
  const delimiterSet = new Set();
  const custArr = ['/', '/', '\\', 'n'];
  let custIdx = 0;
  let custIdxPos = [0, 0];

  str.split('').map((v, i) => {
    if ((v === ',' || v === ':') && !delimiterSet.has(v)) {
      return delimiterSet.add(v);
    }

    if (custArr[custIdx] === v && custIdx === 0) {
      custIdxPos[0] = i;
      custIdx += 1;
    } else if (custArr[custIdx] === v && custIdx === 3) {
      custIdxPos[1] = i;
      custIdx = 0;
      custIdxPos = [0, 0];
      return delimiterSet.add(str.slice(custIdxPos[0] + 2, custIdxPos[1] - 1));
    } else if (custArr[custIdx] === v) {
      custIdx += 1;
    }
  });

  if (!delimiterSet.size) {
    throw new Error(`[ERROR] 구분자 혹은 커스텀 구분자가 존재하지 않습니다.`);
  }
  return delimiterSet;
};

export default CheckDelimiter;
