import { Console } from '@woowacourse/mission-utils'

class App {
  async run() {
    const inputs = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    const numStringArray = this.convertNumStringArray(inputs);
    const sum = this.sumNumStringArray(numStringArray);
  }

  extractSeparatorsAndNumString(inputs) {
    const separatorRegex = /\/\/(.*?)\\n(.*)/;
    const matched = inputs.match(separatorRegex);

    if (matched && matched[0] !== inputs) throw new Error('[ERROR] 커스텀 구분자가 문자열의 첫번째에 위치하지 않습니다.');

    return {
      separator: matched?.[1] ?? null,
      numString: matched?.[2] ?? inputs
    }
  }

  convertNumStringArray (inputs) {
    const defaultSeparators = [',', ':'];
    const {separator, numString} = this.extractSeparatorsAndNumString(inputs);
    
    const separators = [...defaultSeparators, separator];
    const splitter = new RegExp(`[${separators.join('|')}]`);

    return numString.split(splitter);
  }

  sumNumStringArray(arr) {
    return arr.reduce((acc, numStr) => acc + this.formatFromNumStringToNumber(numStr), 0);
  } 

  formatFromNumStringToNumber (numString) {
    if (numString === '') return 0;

    const isOnlyNumber = numString.match(/^[0-9]+$/);

    if (!isOnlyNumber) throw new Error('[ERROR] 숫자로 형변환 할 수 없습니다.');

    return +numString;
  }
}

export default App;
