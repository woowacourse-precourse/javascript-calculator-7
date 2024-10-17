import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    let default_distinguish_string = [',', ':']
    
    if (isNaN(input[0])) {
      const START_STRING = input[0] + input[1];
      if (START_STRING !== '//') {
        throw new Error('[ERROR] 구분문자열을 시작// \\n입니다.')
      }
      let string_index = 2;
    
      while (input.slice(string_index, string_index + 2) !== '\\n') {
        if (!default_distinguish_string.includes(input[string_index])) {
          default_distinguish_string.push(input[string_index]);
        }
        string_index++;
      }
    }
    Console.print(default_distinguish_string)
  }
}

export default App;
