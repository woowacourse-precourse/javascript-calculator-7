function getNumberArray(stringArray) {
  let result = stringArray.map((calculateNumber) => {
    let singleValue = Number(calculateNumber);

    if(Number.isNaN(singleValue)) {
      const ERROR_MESSAGE = '입력하신 값 중에 숫자가 아닌 값이 존재합니다.';
      const ERROR = new Error(ERROR_MESSAGE);
      throw ERROR;
    }

    if(singleValue < 0) {
      const ERROR_MESSAGE = '입력하신 값 중에 정수가 아닌 값이 존재합니다.';
      const ERROR = new Error(ERROR_MESSAGE);
      throw ERROR;
    }

    return singleValue;
  });

  return result;
};

export default getNumberArray;