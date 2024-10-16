import { Console } from "@woowacourse/mission-utils";

function sum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

class App {
  async run() {
    // Console.print("덧셈할 문자를 입력해 주세요.");
    const STRING_INPUT = await Console.readLineAsync("");
    const CLEANED_INPUT = STRING_INPUT.replace(/"/g, "").trim();

    let DELIMITERS = /[,|:]/;
    let NUM_STRING = CLEANED_INPUT;

    if (NUM_STRING.startsWith("//")) {
      const CUSTOM_DELIM = NUM_STRING.split('\\n');
      if (CUSTOM_DELIM.length > 1 && CUSTOM_DELIM[0].startsWith('//')) {
        DELIMITERS = new RegExp(`[${CUSTOM_DELIM[0].slice(2)}]`);
        NUM_STRING = CUSTOM_DELIM[1];
      }
    }

    const WORDS = NUM_STRING.split(DELIMITERS);
    
    const STRING_TO_NUM = WORDS.map(Number);
    const RESULT = sum(STRING_TO_NUM)
    Console.print("결과 : "+RESULT);
  }
}

export default App;
