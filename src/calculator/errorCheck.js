const errorCheck = (inputString, number) => {
  if (!inputString) {
    throw new Error("아무것도 입렵하지 않았습니다.");
  }
  for (let num of number) {
    if (isNaN(num)) {
      throw new Error("잘못된 입력입니다.");
    } else if (num < 0) {
      throw new Error("음수는 입력하실 수 없습니다.");
    }
  }
};

export default errorCheck;
