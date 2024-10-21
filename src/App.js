import { Console } from '@woowacourse/mission-utils';
class App {
  async run() {
    //문자열 입력
    Console.print('덧셈할 문자열을 입력해 주세요.');
    const input = await Console.readLineAsync('');

    //빈 문자열
    if (!input) {
      return Promise.reject(new Error('[ERROR] 문자열을 입력해주세요.'));
    }
    //쉼표 또는 콜론
    else if (/,|:/.test(input)) {
      const result = input
        .split(/,|:/)
        .map(Number)
        .filter(n => !isNaN(n)) //input이 숫자가 아닌 경우 filtering
        .reduce((a, b) => a + b, 0); //합산
      this.printResult(result);
    }

    //커스텀 구분자
    else if (/\/\/(.*?)\\n/.test(input)) {
      //커스텀 구분자 추출
      const matchStr = input.match(/\/\/(.*?)\\n/);
      const customChar = matchStr[1];

      //분리할 문자열
      const str = input.replace(/\/\/.*?\\n/, '');
      const result = str
        .split(customChar)
        .map(Number)
        .filter(n => !isNaN(n))
        .reduce((a, b) => a + b, 0); //합산
      this.printResult(result);
    }

    //잘못된 값 입력
    else {
      return Promise.reject(
        new Error('[ERROR] 지원되지 않는 문자열 포맷입니다.')
      );
    }
  }
  //결과 출력 함수
  printResult(result) {
    Console.print('결과 : ' + result);
  }
}

export default App;
