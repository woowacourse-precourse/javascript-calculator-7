import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    let DEFAULT_DISTINGUISH_STRING = [',', ':']
    
    if (isNaN(input[0])) {
      const START_STRING = input[0] + input[1];
      if (START_STRING !== '//') {
        throw new Error('[ERROR] 구분문자열을 시작// \\n입니다.')
      }
      let STRING_INDEX = 2;
    
      while (input.slice(STRING_INDEX, STRING_INDEX + 2) !== '\\n') {
        if (!DEFAULT_DISTINGUISH_STRING.includes(input[STRING_INDEX])) {
          DEFAULT_DISTINGUISH_STRING.push(input[STRING_INDEX]);
        }
        STRING_INDEX++;
      }
    }
    Console.print(DEFAULT_DISTINGUISH_STRING)
  }
}

export default App;
