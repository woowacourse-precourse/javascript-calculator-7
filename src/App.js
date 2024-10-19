import { Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.separators = [',', ':']; // App.js 실행시 생성자를 통해 ,와 :를 구분자 배열에 추가한다.
  }

  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
  }
}

export default App;
