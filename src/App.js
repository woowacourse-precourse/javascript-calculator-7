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

class App {

  async run() {
    try {
      // 문자열 입력
      let str = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');

      // 구분자와 문자열 리턴
      const { delimiter, numberStr } = checkDelimiter(str);

      // 문자열을 구분자로 구분한 배열 리턴
      const numberArr = numberStr.split(delimiter);

      // 배열의 총합을 리턴
      const sum = numberArr.reduce((total, num) => {
        const castedNumber = Number(num);
        // 예외 처리
        if (isNaN(castedNumber) || num < 0) {
          throw new Error('문자열은 양수과 구분자로만 구성되어야합니다.');
        }
        return total + castedNumber;
      }, 0);

      Console.print(`결과 : ${sum}`);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;