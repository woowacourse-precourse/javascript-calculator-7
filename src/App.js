import { MissionUtils } from "@woowacourse/mission-utils"; 
class App {
  async receiveInput() {
    MissionUtils.Console.print("덧셈할 문자열을 입력해 주세요."); 
    return await MissionUtils.Console.readLineAsync();
  }

  getDelimiter(str) {
    if (!str.startsWith("//")) {
      return /,|:/;
    }
    const [_, customDelimiter] = str.match(/\/\/(.*?)\\n/);
    return new RegExp(/,|:/.source + '|' + customDelimiter);
  }

  getNumbers(str, delimiter) {
    if (!str.startsWith("//")) {
      return str.split(delimiter); 
    }
    const [_, numbers] = str.split("\\n"); 
    return numbers.split(delimiter); 
  }

  getSum(numbers) {
    return numbers.reduce((total, num) => total + Number(num), 0);
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

      const sum = this.getSum(numbers);
      MissionUtils.Console.print("결과 : " + sum);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

export default App;