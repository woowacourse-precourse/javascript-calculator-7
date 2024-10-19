const errorCheck = (inputString, number) => {
  if (!inputString.trim()) {
    throw new Error("아무것도 입력하지 않았습니다.");
  } else if (isNaN(inputString.slice(-1))) {
    throw new Error("마지막 입력을 숫자로 끝내주세요.");
  }

  for (let num of number) {
    if (isNaN(num)) {
      throw new Error("더할 숫자중에 숫자가 아닌 다른게 포함돼있습니다.");
    } else if (num < 0) {
      throw new Error("음수는 입력하실 수 없습니다.");
    } else if (num === "") {
      throw new Error("구분자 사이에 숫자를 넣어주세요.");
    } else if (num > 10000000) {
      throw new Error("10000000이하의 숫자를 입력해주세요.");
    }
  }
};

export default errorCheck;
