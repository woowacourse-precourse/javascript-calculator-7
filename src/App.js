import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const STRING_TO_ADD = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    const DELETE_CUSTOM_SEPARATOR = STRING_TO_ADD.replace(/\/\/.*\\n/g, '');

    if (DELETE_CUSTOM_SEPARATOR === '') {
      Console.print(`결과 : 0`);
      return;
    }

    let pushedCustomStr = []
    let customSeparator = [];
    let startCustomSeparatorIndex = 0;

    for (let i = 0; i < STRING_TO_ADD.length - 1; i++) {
      const CURRENT_SLICED_STRING = STRING_TO_ADD.slice(i, i + 1);
      const NEXT_SLICED_STRING = STRING_TO_ADD.slice(i + 1, i + 2);

      if (CURRENT_SLICED_STRING === '/' && NEXT_SLICED_STRING === '/') {
        if (pushedCustomStr.length !== 0) {
          continue;
        }
        pushedCustomStr.push(1);
        startCustomSeparatorIndex = i + 2;
      } else if (CURRENT_SLICED_STRING === '\\' && NEXT_SLICED_STRING === 'n') {
        if (pushedCustomStr[pushedCustomStr.length - 1] === 1) {
          pushedCustomStr.pop();
          customSeparator.push(STRING_TO_ADD.substring(startCustomSeparatorIndex, i));

          if (pushedCustomStr.length > 1) {
            throw new Error('[ERROR] 잘못된 문자열입니다.');
          }
        }
      }
    }

    if (pushedCustomStr.length !== 0) {
      const HAS_SLASH_SEPARATORS = customSeparator.some(separator => separator.includes("//"));
      if (!HAS_SLASH_SEPARATORS) {
        throw new Error('[ERROR] 잘못된 문자열입니다.');
      }
    }
    
    let sum = 0;

    const VALIDATE_NUMBER = (num) => {
      if (num === '' || isNaN(num)) {
        throw new Error('[ERROR] 잘못된 문자열입니다.');
      }

      if (num.endsWith('.')) {
        throw new Error('[ERROR] 숫자 끝에 소수점이 있습니다.');
      }

      num = parseFloat(num);
      if (num <= 0) {
        throw new Error('[ERROR] 양수가 아닙니다.');
      }

      return num;
    }

    if (customSeparator.length !== 0) {
      const ESCAPED_SEPARATORS = customSeparator.map(separator => {
        return separator.replace(/[-\/\\^$.*+?()[\]{}|]/g, '\\$&');
      });

      const reg = new RegExp(escapedSeparators.sort((a, b) => b.length - a.length).join('|'));

      const CUSTOM_DELIMITER = USERINFO.split(reg);
      
      for (let i = 0; i < CUSTOM_DELIMITER.length; i++) {
        let num = CUSTOM_DELIMITER[i];
        if (num === '//') {
          continue;
        }
        if (num.startsWith('\\n')) {
          num = num.substring(2);
        }

        if (num === '' || isNaN(num)) {
          // 공백일 때와 숫자가 아닐때 (커스텀 문자열일 때 다른 구분자가 있는 경우)
          throw new Error('[ERROR] 잘못된 문자열입니다.');
        }

        num = parseFloat(num);
        if (num <= 0) {
          throw new Error('[ERROR] 양수가 아닙니다.');
        }

        sum += num;
      }
    } else {
      const CUSTOM_DELIMITER = USERINFO.split(/[,|:]/);

      for (let i = 0; i < CUSTOM_DELIMITER.length; i++) {
        let num = CUSTOM_DELIMITER[i];

        if (num === '' || isNaN(num)) {
          // 공백일 때와 숫자가 아닐때 
          throw new Error('[ERROR] 잘못된 문자열입니다.');
        }


        num = parseFloat(num);
        if (num <= 0) {
          throw new Error('[ERROR] 양수가 아닙니다.');
        }
        sum += num
      }
    }

    try {
      Console.print(`결과 : ${sum}`);
    }
    catch (error) {
      Console.print(error.message);
    }

  }
}

export default App;
