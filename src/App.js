import { Console } from '@woowacourse/mission-utils';

class App {
  errorMessages = [
    '[ERROR] 구분 문자열은 // \\n 사이에 입력해야 합니다.',
    '[ERROR] 구분자가 아닌 문자열입니다.',
    '[ERROR] 양수만 더할 수 있습니다.',
    '[ERROR] 숫자는 구분 문자열이 될 수 없습니다.',
    '[ERROR] 문자를 연속해서 사용할 수 없습니다. 숫자와 혼용해주세요.',
  ];

  throwError(messageIndex) {
    throw new Error(this.errorMessages[messageIndex]);
  }

  async run() {
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );

    let default_distinguish_string = new Set([',', ':']);
    let string_index = 0;
    let output = 0;
    let current_number = '';
    let last_char_type = '';

    if (isNaN(input[0])) {
      const START_STRING = input[0] + input[1];
      if (START_STRING !== '//') {
        throw new Error(this.throwError(0));
      }
      string_index = 2;
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
      string_index += 2;
    }

    for (let i = string_index; i < input.length; i++) {
      const current_char = input[i];

      if (!isNaN(current_char)) {
        // 현재 문자가 숫자일 경우
        current_number += current_char;
        last_char_type = 'number';
      } else {
        // 숫자가 끝났다면
        if (current_number) {
          const number = Number(current_number);
          if (number <= 0) {
            this.throwError(2);
          }
          output += number;
          current_number = '';
        }
        

        if (!default_distinguish_string.has(current_char)) {
          this.throwError(1);
        }
        if (last_char_type === 'separator') {
          this.throwError(4);
        }
        last_char_type = 'separator';
      }
    }

    if (current_number) {
      const number = Number(current_number);
      if (number <= 0) {
        this.throwError(2);
      }
      output += number;
    }

    Console.print('결과 : ' + output);
  }
}

export default App;
