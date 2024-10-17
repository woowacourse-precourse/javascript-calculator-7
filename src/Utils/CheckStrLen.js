const CheckStrLen = str => {
  if (!str.length) {
    throw new Error(`[ERROR] 값을 입력해 주세요.`);
  }
};

export default CheckStrLen;
