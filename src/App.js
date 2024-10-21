import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      const result = sumNumbers(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message); 
      throw error;
    }
  }
}

function sumNumbers(input) {
  if (input === "") {
    return 0;
  }

  // 입력에서 "\\n"을 줄바꿈 문자로 변환
  input = input.replace(/\\n/g, "\n");

  if (input.startsWith("//")) {
    const delimiterEndIndex = input.indexOf("\n");

    if (delimiterEndIndex === -1) {
      throw new Error("[ERROR] 유효하지 않은 구분자 형식입니다.");
    }

    const customDelimiter = input.substring(2, delimiterEndIndex);

    if (!customDelimiter) {
      throw new Error("[ERROR] 유효하지 않은 구분자입니다.");
    }
  
    const numberPart = input.substring(delimiterEndIndex + 1);
    const numbers = numberPart.split(new RegExp(`[${customDelimiter},:]`)).map(validateNumber);
    return numbers.reduce((sum, num) => sum + num, 0);
  }

  
  if (input.includes(",") || input.includes(":")) {
    const numbers = input.split(/[,|:]/).map(validateNumber);
    return numbers.reduce((sum, num) => sum + num, 0);
  }

  throw new Error("[ERROR] 입력에 구분자가 포함되어야 합니다.");
}

function validateNumber(value) {
  const num = Number(value);

  if (num < 0) {
    throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
  }

  return num;
}

export default App;