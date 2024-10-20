import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      // Console API를 이용해 비동기로 사용자 입력을 받음
      const input = await Console.readLineAsync('문자열을 입력하세요: ');

      // 입력값을 계산하는 함수 호출
      const result = this.calculation(input);

      // 결과 출력
      Console.print(result);
    } catch (error) {
      Console.print(error.message);
    }
  }

  calculation(input) {
    if (input === '') return 0;

    let separator = /[,:]/;
    let numbersString = input;

    // 커스텀 구분자 처리
    if (input.startsWith('//')) {
      const delimiterEndIndex = input.indexOf('\\n');
      if (delimiterEndIndex === -1) {
        throw new Error('[ERROR] 잘못된 입력 형식입니다.');
      }
      const customDelimiter = input.substring(2, delimiterEndIndex);
      if (customDelimiter.length === 0) {
        throw new Error('[ERROR] 커스텀 구분자가 지정되지 않았습니다.');
      }
      separator = new RegExp(this.escapeRegExp(customDelimiter)); // 정규식 이스케이프 기능 사용
      numbersString = input.substring(delimiterEndIndex + 2);
    }

    const numberStrings = numbersString.split(separator);
    let sum = 0;

    for (const numStr of numberStrings) {
      if (numStr.trim() === '') continue;
      if (!/^\d+$/.test(numStr)) {
        throw new Error('[ERROR] 숫자가 아닌 값이 포함되어 있습니다: ' + numStr);
      }
      sum += parseInt(numStr, 10);
    }

    return sum;
  }

  escapeRegExp(string) {
    // 정규식을 안전하게 생성하기 위해 특수 문자를 이스케이프 처리
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

export default App;
