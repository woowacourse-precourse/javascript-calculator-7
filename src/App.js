/* eslint-disable */
import { Console } from '@woowacourse/mission-utils';

function isInputEmpty(input) {
  if (input === '') {
    return true;
  }
  return false;
}

function hasCustomSeparator(input) {
  if (input.startsWith('//')) {
    const separatorIndex = input.indexOf('\\n');

    if (separatorIndex === -1) {
      throw new Error('[ERROR] 커스텀 구분자 양식은 \\n을 반드시 포함해야 합니다.');
    }

    if (separatorIndex === 2) {
      throw new Error('[ERROR] 커스텀 구분자로 설정할 문자가 반드시 포함되어 있어야 합니다.');
    }

    if (separatorIndex !== input.lastIndexOf('\\n')) {
      throw new Error('[ERROR] 커스텀 구분자 양식에서 \\n은 반드시 하나만 있어야 합니다.');
    }

    return true;
  }

  if (input.includes('\\n')) {
    throw new Error('[ERROR] 커스텀 구분자 양식은 반드시 //로 시작해야 합니다');
  }

  return false;
}

class App {
  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
  }
}

export default App;
