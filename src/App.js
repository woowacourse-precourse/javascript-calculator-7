import { Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.defaultSeparators = [',', ':']; // App.js 실행시 생성자를 통해 ,와 :를 구분자 배열에 추가한다.
  }

  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
  }

  // 입력값을 파싱하여 구분자와 숫자 추출
  parseInput(input) {
    const separators = [...this.defaultSeparators]; // 기본 구분자 추가

    // 커스텀 구분자 처리
    if (input.startsWith('//')) {
      const customIndex = input.indexOf('\n');
      if (customIndex !== 3) {
        throw new Error('[ERROR] 커스텀 구분자를 잘못 입력했습니다.');
      }
      // 커스텀 구분자 추출
      const customSeparator = input.substring(2, 3);
      separators.push(customSeparator);
      // 커스텀 구분자 이후 문자열 추출
      mainString = input.substring(customIndex + 1);
    }
    return { separators, mainString };
  }

  // 구분자와 숫자를 분리한다
  static splitNumbers(mainString, separators) {
    const separatorRegex = new RegExp(`[${separators.join('')}]`); // 구분자들을 정규형으로 나타낸다
    const numArray = mainString.split(separatorRegex); // 숫자를 분리한다

    return numArray.map(num => {
      const number = parseInt(num, 10);
      if (Number.isNaN(number) || number < 0) {
        throw new Error('[ERROR] 잘못된 입력입니다. 양수를 입력해 주세요.');
      }
      return number;
    });
  }
}

export default App;
