import { MissionUtils } from '@woowacourse/mission-utils';
const { Console } = MissionUtils;

class App {
  async run() {
    try {
      const answer = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.'
      );
      if (answer.length == 0) {
        Console.print(0);
      }

      //만약 answer에 숫자가 없다면 에러 던지기
      if (answer.search(/[0-9]/g) == -1) {
        throw Error('유효한 값을 입력해주세요');
      }

      // 커스텀 문자가 있는 경우, 커스텀 문자가 없는 경우
      const regex = /^\/\/(.*)\\n/;
      const match = answer.match(regex);
      const customLetter = match[1];

      if (match) {
        const customRegex = new RegExp(
          `[:,${customLetter}]`,
          'g'
        );

        const sum = answer
          .slice(match[0].length)
          .split(customRegex)
          .reduce((a, c) => Number(a) + Number(c));
        Console.print(`결과 : ${sum}`);
      }
      if (!match) {
        const sum = answer
          .split(/[:,]/g)
          .reduce((a, c) => Number(a) + Number(c));
        Console.print(`결과 : ${sum}`);
      }
    } catch (error) {
      throw Error('[ERROR]' + error.message);
    }
  }
}

export default App;
