import { Console } from '@woowacourse/mission-utils';

// 커스텀 구분자 확인 regex
const CUSTOM_DELIMITER_REGEX = /^\/\/(\D)\\n/;

class App {
  async run() {
    try {
      // 변수 선언
      let delimiter;
      // 문자열 입력
      let str = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
      // 커스텀 구분자 확인
      const isCustomDelimiter = CUSTOM_DELIMITER_REGEX.test(str);

      if (isCustomDelimiter) {
        const match = str.match(CUSTOM_DELIMITER_REGEX);
        delimiter = match[1];
        str = str.replace(CUSTOM_DELIMITER_REGEX, '');
      } else {
        delimiter = /[,:]/;
      }

      // 문자열을 구분자로 구분한 배열 리턴
      const numberArr = str.split(delimiter);
      // 배열의 총합을 리턴
      const sum = numberArr.reduce((total, num) => {
        const a = Number(num);
        // 예외 처리
        if (isNaN(a) || num < 0) {
          throw new Error('문자열은 양수과 구분자로만 구성되어야합니다.');
        }
        return total + a;
      }, 0);

      Console.print(`결과 : ${sum}`);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;