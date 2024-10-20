function getNumberArray(stringArray) {
  let result = stringArray.map((calculateNumber) => {
    let singleValue = Number(calculateNumber);

    if(Number.isNaN(singleValue)) {
      const ERROR_MESSAGE = '입력하신 값 중에 숫자가 아닌 값이 존재합니다.';
      const ERROR = new Error(ERROR_MESSAGE);
      throw ERROR;
    }

    if(singleValue < 0) {
      const ERROR_MESSAGE = '입력하신 값 중에 양수가 아닌 값이 존재합니다.';
      const ERROR = new Error(ERROR_MESSAGE);
      throw ERROR;
    }

    /** TODO : 소수인 경우 판별
     *  에러 메시지는 '소수가 포함되어 있습니다. 커스텀 구분자가 . 으로 설정될 경우 원하는 계산값을 얻을 수 없을 수 있습니다.
     */

    if(Math.floor(singleValue) !== singleValue) {
      const ERROR_MESSAGE = ''
    }

    return singleValue;
  });

  return result;
};

export default getNumberArray;