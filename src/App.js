import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );
    try {
      // 빈 문자열일 경우
      if (input == '') {
        Console.print('결과 : 0 ');
      }

      // 커스텀 구분자
      if (input.startsWith('//') && input.substring(3, 5) == '\\n') {
        const delimiter = input.charAt(2);
        const result = input.substring(5).split(delimiter);
        let hap = 0;
        result.forEach((item) => {
          hap += parseInt(item);
        });

        Console.print(`결과 : ${hap}`);
      }

      // 기본 구분자
      const result = input.split(/,|;/g);
      let sum = 0;
      result.forEach((item) => {
        sum += parseInt(item);
      });
      Console.print(`결과 : ${sum}`);
    } catch (error) {
      Console.print(`[ERROR] ${error}`);
    }
  }
}
export default App;
