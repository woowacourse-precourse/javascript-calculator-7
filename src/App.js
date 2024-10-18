import { Console } from '@woowacourse/mission-utils';

//정규표현식
const REGEX1 = /^\d*(\.\d*)?([\d*(\.\d*)?\,\:]*\d*(\.\d*)?)$/;
const REGEX2 = /^\/{2}.+\d*(\.\d*)?$/;
const REGEX4 = /\,|\:/;

class App {
  getStr = async () => {
    const userStr = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );

    //빈 문자열인 경우
    if (userStr == '') {
      Console.print(`결과 : 0`);
    } else if (REGEX1.test(userStr)) {
      //, 또는 : 구분자 문자열
      this.add_num(userStr);
    } else if (REGEX2.test(userStr)) {
      // 커스텀 구분자 문자열
      const params = this.extract_delimiter(userStr);
      this.add_num(params[0], params[1]);
    } else {
      //에러
    }
  };

  //커스텀 구분자 추출
  extract_delimiter = (str) => {
    const delimiter = str.slice(2, str.indexOf('\\n'));
    const extractedStr = str.slice(str.indexOf('\\n') + 2);

    //입력값 검사
    const REGEX3 = new RegExp(
      `^\\d*(\\.\\d*)?((\\d*(\\.\\d*)?\|${delimiter})*)$`
    );

    if (REGEX3.test(extractedStr)) {
      return [extractedStr, delimiter];
    } else {
      //Err
    }
  };

  //숫자 더하기
  add_num = (str, delimiter = REGEX4) => {
    let numArr = [];

    //숫자 추출하기
    numArr = str.split(delimiter);

    //숫자로 전환
    numArr = numArr.map((x) => Number(x));

    //더한 결과 값 반환
    return numArr.reduce((a, b) => a + b);
  };

  async run() {
    this.getStr();
  }
}

let app = new App();
app.run();

export default App;
