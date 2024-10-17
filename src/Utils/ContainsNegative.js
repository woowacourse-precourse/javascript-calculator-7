const ContainsNegative = (str) => {
  if (str.match(/-\d+/g)) {
    throw new Error(`[ERROR] 음수는 문자열에 포함되면 안됩니다.`);
  }
};

export default ContainsNegative;
