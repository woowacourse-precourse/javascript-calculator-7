import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const USERINFO = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    
    if (USERINFO.trim() === '') {
      Console.print(`결과 : 0`);
      return;
    }

    let pushedCustomStr = []
    let customSeparator = [];
    let startCustomIndex = 0;

    for (let i = 0; i < USERINFO.length - 1; i++) {
      const CURRENT_SLICED_STRING = USERINFO.slice(i, i + 1);
      let NEXT_SLICED_STRING = USERINFO.slice(i + 1, i + 2);

      if (CURRENT_SLICED_STRING === '/' && NEXT_SLICED_STRING === '/') {
        pushedCustomStr.push(1);
        startCustomIndex = i + 2;
      } else if (CURRENT_SLICED_STRING === '\\' && NEXT_SLICED_STRING === 'n') {
        if (pushedCustomStr[pushedCustomStr.length - 1] === 1) {
          pushedCustomStr.pop();
          customSeparator.push(USERINFO.substring(startCustomIndex, i));
  
          if (pushedCustomStr.length > 1) {
            throw new Error('[ERROR] 잘못된 문자열입니다.');
          }
        }
      }
    }

    if (pushedCustomStr.length !== 0) {
      throw new Error('[ERROR] 잘못된 문자열입니다.');
    }
    
    let sum = 0;

    if (customSeparator.length !== 0) {
      const escapedSeparators = customSeparator.map(separator => {
        return separator.replace(/[-\/\\^$.*+?()[\]{}|]/g, '\\$&'); 
      });

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

        num = parseInt(num);
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


        num = parseInt(num);
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
