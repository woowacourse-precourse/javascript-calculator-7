import { Console } from '@woowacourse/mission-utils';

class Input {
  static async getInputValue() {
    const inputValue = (await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n')).trim();
    this.validateInputValue(inputValue);

    return inputValue;
  }

  static validateInputValue(inputValue) {
    if (inputValue.includes(' ')) {
      throw new Error('[ERROR] 띄어쓰기는 허용되지 않습니다.');
    }
  }
}

export default Input;
