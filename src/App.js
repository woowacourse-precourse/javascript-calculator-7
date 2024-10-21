import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    // 입력 기능
    const input = await MissionUtils.Console.readLineAsync(
      '덧셈할 문자열을 입력해주세요.\n'
    );

    const result = this.getDelimiters(input);
    MissionUtils.Console.print(`결과 : ${result}`);
  }

  // 쉼표, 콜론, 커스텀 구분자로 문자열을 분리하는 함수
  getDelimiters(str) {
    // 공백 문자열 처리
    if (str.trim() === '') return 0;

    // 기본 구분자
    let delimiter = /,|:/;

    // 기본 구분자 처리
    if (str.match(delimiter)) {
      return str.split(delimiter);
    }

    // 커스텀 구분자 처리
    if (str.startsWith('//')) {
      const [customDelimiter, rest] = str.split('\\n');
      delimiter = customDelimiter[2];
      return rest.split(delimiter);
    }
  }
}

export default App;
