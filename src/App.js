import { MissionUtils } from "@woowacourse/mission-utils"; 

const { Console } = MissionUtils;

const DEFAULT_DELIMITER = /,|:/;

class App {
  async receiveInput() {
    Console.print("덧셈할 문자열을 입력해 주세요."); 
    return Console.readLineAsync();
  }

  getDelimiter(str) {
    if (!str.startsWith("//")) {
      return DEFAULT_DELIMITER;
    }
    const [_, customDelimiter] = str.match(/\/\/(.*?)\\n/);
    return new RegExp(`${DEFAULT_DELIMITER.source}|${customDelimiter}`);
  }

  getNumbers(str, delimiter) {
    if (!str.startsWith("//")) {
      return str.split(delimiter); 
    }
    const [_, numbers] = str.split("\\n"); 
    return numbers.split(delimiter); 
  }

  getSum(numbers) {
    return numbers.map(Number).reduce((total, num) => total + num, 0);
  }

  checkNumbers(numbers) {
    numbers.forEach((num) => {
      if (isNaN(Number(num)) || Number(num) < 0) {
        throw new Error("[ERROR] 잘못된 값이 입력되었습니다.");
      }
    });
  }

  async run() {
    try {
      const str = await this.receiveInput();
      const delimiter = this.getDelimiter(str);
      const numbers = this.getNumbers(str, delimiter);
      
      this.checkNumbers(numbers);

      const result = this.getSum(numbers);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;