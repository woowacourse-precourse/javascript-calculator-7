const ResultNumber = (parseNumbers) => {
  return parseNumbers.reduce((p, n) => {
    if (n > 0) {
      return parseInt(p, 10) + parseInt(n, 10);
    }
    throw new Error(`[ERROR] 음수가 있습니다. 양수로만 구성해주세요.`);
  }, 0);
};

export default ResultNumber;
