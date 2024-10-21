import { Console } from '@woowacourse/mission-utils';
class App {
  async run() {
    //문자열 입력
    Console.print('덧셈할 문자열을 입력해 주세요.');
    const input = await Console.readLineAsync('');

    //에러케이스 1: 빈 문자열
    if (!input) {
      return Promise.reject(new Error('[ERROR] 문자열을 입력해주세요.'));
    }
    //쉼표 또는 콜론
    else if (/,|:/.test(input)) {
      const result = this.calculateSum(input.split(/,|:/));
      this.printResult(result);
    }

    //커스텀 구분자
    else if (/\/\/(.*?)\\n/.test(input)) {
      //커스텀 구분자 추출
      const matchStr = input.match(/\/\/(.*?)\\n/);
      const customChar = matchStr[1];

      //분리할 문자열
      const str = input.replace(/\/\/.*?\\n/, '');
      const result = this.calculateSum(str.split(customChar));
      this.printResult(result);
    }

    //에러케이스 2: 잘못된 값 입력
    else {
      return Promise.reject(
        new Error('[ERROR] 지원되지 않는 문자열 포맷입니다.')
      );
    }
  }
  //합산 함수
  calculateSum(numbers) {
    //에러케이스 3: 유효하지 않은 숫자
    const invaildNumbers = numbers.filter((n) => isNaN(Number(n)));
    if (invaildNumbers) {
      return Promise.reject(
        new Error('[ERROR] 유효하지 않은 숫자가 포함되어 있습니다.')
      );
    }
    return numbers.map(Number).reduce((a, b) => a + b, 0);
  }

  //결과 출력 함수
  printResult(result) {
    Console.print('결과 : ' + result);
  }
}

export default App;
