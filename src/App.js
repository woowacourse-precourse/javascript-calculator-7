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
    } else if (REGEX2.test(userStr)) {
      // 커스텀 구분자 문자열
    } else {
      //에러
    }
  };
}

let app = new App();
app.getStr(); //문자열 입력받기

export default App;
