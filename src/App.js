import { Console } from '@woowacourse/mission-utils';

// 커스텀 구분자 확인 메서드
function checkDelimiter(str) {

  // 커스텀 구분자 확인 regex
  const CUSTOM_DELIMITER_REGEX = /^\/\/(\D)\\n/;

  let delimiter;
  let numberStr;

  const isCustomDelimiter = CUSTOM_DELIMITER_REGEX.test(str);

  if (isCustomDelimiter) {
    const match = str.match(CUSTOM_DELIMITER_REGEX);
    delimiter = match[1];
    numberStr = str.replace(CUSTOM_DELIMITER_REGEX, '');
  } else {
    delimiter = /[,:]/;
    numberStr = str;
  }

  return { delimiter, numberStr };
}

// 숫자로 이루어진 문자열 합 계산 메서드
function sumAllNum(delimiter, numberStr) {
  // 문자열을 구분자로 구분하여 배열 리턴
  const numberArr = numberStr.split(delimiter);

  // 배열의 총합 계산
  const sum = numberArr.reduce((total, num) => {
    const castedNumber = Number(num);
    // 예외 처리
    if (isNaN(castedNumber) || num < 0) {
      throw new Error('문자열은 양수과 구분자로만 구성되어야합니다.');
    }
    return total + castedNumber;
  }, 0);

  return sum;
}

class App {

  async run() {
    try {
      // 문자열 입력
      const answer = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');

      // 구분자와 문자열 리턴
      const { delimiter, numberStr } = checkDelimiter(answer);

      // 숫자의 합 리턴
      const result = sumAllNum(delimiter, numberStr);

      Console.print(`결과 : ${result}`);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;