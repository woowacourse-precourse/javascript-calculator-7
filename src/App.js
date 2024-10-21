import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      const numbers = this.extractNumbers(input);
  }

  // 문자열에서 숫자를 추출하는 함수
  extractNumbers(input) {
    let delimiter = /,|:/;
    let inputText = input;

    if (input.startsWith('//')) {
      const endIndex = input.indexOf('\n');
      delimiter = new RegExp(input.substring(2, endIndex));
      inputText = input.substring(endIndex + 1);
    }
    
    const splitText = inputText.split(delimiter);
    const numbers = splitText.map(Number);
    return numbers;
  }
}

export default App;