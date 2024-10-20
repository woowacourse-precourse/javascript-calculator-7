import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      const result = this.calculate(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      if (!error.message.startsWith("[ERROR]")) {
        error.message = `[ERROR] ${error.message}`;
      }
      throw error;
    }
  }

  calculate(input) {
    if (!input) return 0;
    
    let numberString = input;
    let delimiter = ',|:';
    
    if (input.startsWith('//')) {
      const customDelimiterMatch = input.match(/\/\/(.*?)\\n(.*)/);
      if (!customDelimiterMatch) {
        throw new Error("[ERROR] 잘못된 커스텀 구분자 형식입니다. 구분자는 //와 \n 사이에 위치해야합니다. ex. //;\\n1;2;3");
      }
      
      delimiter = this.escapeRegExp(customDelimiterMatch[1]);
      numberString = customDelimiterMatch[2];
    }
    
    if (!numberString.trim()) {
      return 0;
    }
    
    const numbers = numberString.split(new RegExp(delimiter))
      .map(num => {
        const number = Number(num.trim());
        
        if (isNaN(number)) {
          throw new Error("[ERROR] 숫자나 구분자 (, 혹은 :)가 아닌 값이 포함되어 있습니다.");
        }
        
        if (number < 0) {
          throw new Error("[ERROR] 음수를 입력할 수 없습니다. 양수를 입력해주세요.");
        }
        
        return number;
      });
    
    return numbers.reduce((sum, num) => sum + num, 0);
  }

  escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

export default App;