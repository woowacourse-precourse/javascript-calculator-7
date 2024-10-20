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

      // 기본 구분자
      if (!input.startsWith('//')) {
        // 예외 처리
        if (
          input.startsWith(',') |
          input.startsWith(':') |
          input.endsWith(',') |
          input.endsWith(':')
        ) {
          throw new Error('쉼표 또는 콜론으로 시작하거나 끝날 수 없습니다.');
        }

        const delimiterReg = /(,|:){2,}/;
        if (delimiterReg.test(input)) {
          throw new Error('구분자는 2번 이상 사용할 수 없습니다.');
        }

        const inputReg = /^[1-9]\d*([,:][1-9]\d*)*$/;
        if (!inputReg.test(input)) {
          throw new Error('입력값이 유효하지 않습니다.');
        }

        const result = input.split(/,|:/g);
        let sum = 0;
        result.forEach((item) => {
          sum += parseInt(item);
        });
        Console.print(`결과 : ${sum}`);
      }

      // 커스텀 구분자
      if (input.startsWith('//') && input.substring(3, 5) == '\\n') {
        const inputCustomNumbers = input.substring(5);
        const delimiter = input.charAt(2);

        // 예외처리
        if (
          inputCustomNumbers.startsWith(delimiter) |
          inputCustomNumbers.endsWith(delimiter)
        ) {
          throw new Error('구분자로 시작하거나 끝날 수 없습니다.');
        }

        const delimiterReg = new RegExp(`([${delimiter}]){2,}`);
        if (delimiterReg.test(inputCustomNumbers)) {
          throw new Error('구분자는 2번 이상 사용할 수 없습니다.');
        }
        const inputReg = new RegExp(`^[1-9]\\d*([${delimiter}][1-9]\\d*)*$`);
        if (!inputReg.test(inputCustomNumbers)) {
          throw new Error('입력값이 유효하지 않습니다.');
        }

        // 합 구하기
        const result = inputCustomNumbers.split(delimiter);
        let hap = 0;
        result.forEach((item) => {
          hap += parseInt(item);
        });

        Console.print(`결과 : ${hap}`);
      }
    } catch (error) {
      Console.print(`[ERROR] ${error}`);
    }
  }
}
export default App;
