import { Console } from '@woowacourse/mission-utils';

//정규표현식
const REGEX1 = /^\d*(\.\d*)?([\d*(\.\d*)?\,\:]*\d*(\.\d*)?)$/;
const REGEX2 = /^\/{2}.+\d*(\.\d*)?$/;

class App {
  async run() {
    // 문자열 입력
    const userStr = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );

    try {
      let result = processUserInput(userStr);
      Console.print(`결과 : ${result}`);
    } catch (e) {
      Console.print(e);
    }
  }

  processUserInput(userStr) {
    if (userStr == '') {
      // 빈 문자열인 경우
      return 0;
    } else if (REGEX1.test(userStr)) {
      //, 또는 : 구분자 문자열
      return this.addNum(userStr);
    } else if (REGEX2.test(userStr)) {
      // 커스텀 구분자 문자열
      const params = this.extractDelimiter(userStr);
      return this.addNum(params[0], params[1]);
    } else {
      //에러
      throw new Error('[ERROR] 입력 형식을 지켜주세요');
    }
  }

  //커스텀 구분자 추출
  extractDelimiter(str) {
    const delimiter = str.slice(2, str.indexOf('\\n'));
    const extractedStr = str.slice(str.indexOf('\\n') + 2);

    //입력값 검사
    const REGEX3 = new RegExp(
      `^\\d*(\\.\\d*)?((\\d*(\\.\\d*)?\|${delimiter})*)$`
    );

    if (REGEX3.test(extractedStr)) {
      return [extractedStr, delimiter];
    } else {
      throw new Error('[ERROR] 커스텀 구분자와 양수만을 사용해주세요');
    }
  }

  //숫자 더하기
  addNum(str, delimiter = /\,|\:/) {
    const numArr = str.split(delimiter).map((x) => Number(x)); //숫자 추출
    return numArr.reduce((a, b) => a + b); //더한 결과 값 반환
  }
}

const app = new App();
app.run();

export default App;
