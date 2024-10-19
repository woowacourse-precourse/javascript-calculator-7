import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const USERINFO = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    let pushedCustomStr = []
    let customSeparator = '';
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
          customSeparator = USERINFO.substring(startCustomIndex, i);
        }
      }

      if (pushedCustomStr.length > 1) {
        throw new Error('[ERROR] 잘못된 문자열입니다.');
      }
    }

    if (pushedCustomStr.length !== 0) {
      throw new Error('[ERROR] 잘못된 문자열입니다.');
    }
    
}

export default App;
