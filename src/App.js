import { Console } from '@woowacourse/mission-utils'

class App {
  async run() {
    const inputs = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    this.extractSeparatorsAndNumString(inputs);
  }

  extractSeparatorsAndNumString(inputs) {
    const separatorRegex = /\/\/(.*?)\\n(.*)/;
    const matched = inputs.match(separatorRegex);

    return {
      separator: matched?.[1] ?? null,
      numString: matched?.[2] ?? inputs
    }
  }
}

export default App;
