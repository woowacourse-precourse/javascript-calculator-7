import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해주세요.\n');
    // 커스텀 문자열을 찾는 정규표현식
    const regex = /^\/\/(.+)\\n/;

    // 커스텀 문자열과 match한 결과를 배열로
    const match = input.match(regex);

    let stringNumbers;
    if (match) {
      console.log('match', match, match[1]);
      // 커스텀 문자열 찾기
      const customDelimiter = match[1];

      // 정규표현식으로 커스텀 문자열을 정의한 부분을 제거
      const newInput = input.replace(regex, '');
      // 커스텀 문자열로 split
      stringNumbers = newInput.split(customDelimiter);
    } else {
      stringNumbers = input.split(/[,|:]/);
    }
    const sum = stringNumbers.reduce((acc, number) => {
      // 이 에러 처리 시점을 어디로 해야할까?
      if (number.includes('-')) {
        throw new Error('[ERROR] 음수는 입력할 수 없습니다');
      }

      return acc + Number(number);
    }, 0);
    Console.print('결과 : ' + sum);
  }
}

export default App;
