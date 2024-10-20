const isOnlyPositive = (splitString) => {
  splitString.forEach((num) => {
    if (isNaN(num)) {
      throw new Error("[ERROR] 입력한 문자열에 숫자가 아닌 값이 존재합니다.");
    } else if (num < 0) {
      throw new Error("[ERROR] 입력한 문자열에 음수가 존재합니다.");
    }
  });

  return true;
};

export default isOnlyPositive;
