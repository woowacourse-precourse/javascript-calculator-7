const CheckStrLen = (str) => {
  if (!str.length) {
    return 0;

    // throw new Error(`[ERROR] 값을 입력해 주세요.`);
  }
  return str.length;
};

export default CheckStrLen;
