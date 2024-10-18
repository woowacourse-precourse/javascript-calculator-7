import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    let default_distinguish_string = [',', ':']
    let string_index = 2;
    let output = 0;
    if (isNaN(input[0])) {
      const START_STRING = input[0] + input[1];
      if (START_STRING !== '//') {
        throw new Error('[ERROR] 구분문자열을 시작// \\n입니다.')
      }
      
      while (input.slice(string_index, string_index + 2) !== '\\n') {
        if (!default_distinguish_string.includes(input[string_index])) {
          default_distinguish_string.push(input[string_index]);
        }
        string_index++;
      }
    }
    
    for (let i = string_index + 2; i < input.length; i++) {
      if (isNaN(input[i])) {
        if (!default_distinguish_string.includes(input[i])) {
          throw new Error('[ERROR] 구분자가 아닌 문자열')
        }
        continue
      }

      let number = Number(input[i])
      if (number <= 0) {
        throw new Error('[ERROR] 양수만 가능')
      }

      output += number
    }

    Console.print('결과 : ' + output)
  }
}

export default App;
