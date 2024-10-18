import { Console } from '@woowacourse/mission-utils';

class App {
  errorMessages = [
    '[ERROR] 구분 문자열은 // \\n 사이에 입력해야 합니다.',
    '[ERROR] 구분자가 아닌 문자열입니다.',
    '[ERROR] 양수만 더할 수 있습니다.',
    '[ERROR] 숫자는 구분 문자열이 될 수 없습니다.',
  ];

  throwError(messageIndex) {
    throw new Error(this.errorMessages[messageIndex]);
  }
  
  async run() {
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );

    let default_distinguish_string = new Set([',', ':']);
    let string_index = 2;
    let output = 0;
    if (isNaN(input[0])) {
      const START_STRING = input[0] + input[1];
      if (START_STRING !== '//') {
        throw new Error(this.throwError(0));
      }

      while (
        !(input[string_index] === '\\' && input[string_index + 1] === 'n')
      ) {
        if (!isNaN(input[string_index])) {
          throw new Error(this.throwError(3));
        }
        if (!default_distinguish_string.has(input[string_index])) {
          default_distinguish_string.add(input[string_index]);
        }
        string_index++;
      }
    }

    for (let i = string_index + 2; i < input.length; i++) {
      if (isNaN(input[i])) {
        if (!default_distinguish_string.has(input[i])) {
          throw new Error(this.throwError(1));
        }
        continue;
      }

      let number = Number(input[i]);
      if (number <= 0) {
        throw new Error(this.throwError(2));
      }

      output += number;
    }

    Console.print('결과 : ' + output);
  }
}

export default App;