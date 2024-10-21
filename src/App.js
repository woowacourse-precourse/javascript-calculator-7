import { Console } from "@woowacourse/mission-utils";
// Console.readLineAsync() / Console.print()

class App {
  async run() {
    let input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    const separator = [',', ':'];
  
    while(input.match(/^\/\//g)) {
      if(input.match(/\/\/(.)\\n/)) {
        const match = input.match(/\/\/(.)\\n/);
        const customSep = match[1];
        separator.push(customSep);
        input = input.substr(match[0].length);
      } else {
        // Error 처리
      }
    }
  }
}

export default App;
