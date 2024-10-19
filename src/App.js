import { Console } from '@woowacourse/mission-utils'

class App {
  async run() {
    const inputs = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    const numStringArray = this.convertNumStringArray(inputs);
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

  convertNumber (numString) {
    if (numString === '') return 0;
  }
}

export default App;
