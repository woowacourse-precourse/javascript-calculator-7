import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해주세요.\n');

    const StringNumbers = input.split(/[,|:]/);

    const sum = StringNumbers.reduce((acc, number) => {
      // 이 에러 처리 시점을 어디로 해야할까?
      if (number.includes('-')) {
        throw new Error('[ERROR] 음수는 입력할 수 없습니다');
      }
      return acc + Number(number);
    }, 0);

    Console.print(sum);
  }
}

export default App;
