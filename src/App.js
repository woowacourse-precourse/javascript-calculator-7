import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { Console } = require("@woowacourse/mission-utils");

class StringCalculator {
  // 빈 문자열 처리
  add(numbers) {
    if (numbers === "") {
      return 0;
    }

     // 입력에서 \\n을 실제 \n로 변환
     numbers = numbers.replace("\\n", "\n");

     // 기본 구분자 (쉼표, 콜론)
     let delimiters = /,|:/;
     let numberString = numbers;
 
     // 커스텀 구분자 처리
    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf('\n');
      
      if (delimiterEndIndex === -1) {
        throw new Error("[ERROR] 잘못된 구분자 형식입니다.");
      }

      // "//"와 "\n" 사이의 커스텀 구분자 추출
      const customDelimiter = numbers.substring(2, delimiterEndIndex);

      if (!customDelimiter) {
        throw new Error("[ERROR] 잘못된 구분자 형식입니다.");
      }

      // 커스텀 구분자를 정규식으로 변환, 특수 문자가 있다면 이스케이프 처리
      const escapedCustomDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      delimiters = new RegExp(`[${escapedCustomDelimiter},:]`);

      // 숫자 문자열 추출
      numberString = numbers.substring(delimiterEndIndex + 1);
    }

     // 숫자 배열로 변환 후 합산
     const numberArray = numberString.split(delimiters).map(num => Number(num));

       // 음수 검출 및 예외 처리
    const negativeNumbers = numberArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`[ERROR] 음수는 허용되지 않습니다: ${negativeNumbers.join(", ")}`);
    }
 
     // 숫자들의 합산
     return numberArray.reduce((sum, num) => sum + num, 0);
  }
}

class App {
  async run() {
    const calculator = new StringCalculator();

    try {
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      const result = calculator.add(input);
      Console.print(`결과: ${result}`);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
