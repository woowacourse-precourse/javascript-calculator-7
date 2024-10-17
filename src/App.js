import { Console } from '@woowacourse/mission-utils';

//정규표현식
const REGEX1 = /^[\d][\d|\,|\:]+\d$/;
const REGEX2 = /^\/{2}.+\d$/;

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
      this.add_num(userStr, [this.extract_delimiter(userStr)]);
    } else {
      //에러
    }
  };

  //커스텀 구분자 추출
  extract_delimiter = (str) => {
    const delimiter = str.slice(2, str.indexOf('\\n'));
    const extractedStr = str.slice(str.indexOf('\\n') + 2);

    //입력값 검사
    const REGEX3 = new RegExp(`^\\d([\\d${delimiter}]*)$`);
    if (REGEX3.test(extractedStr)) {
      //에러
    }

    return delimiter;
  };

  //숫자 더하기
  add_num = (str, delimiter = [',', ':']) => {};

  async run() {
    this.getStr();
  }
}

let app = new App();
app.run();

export default App;
