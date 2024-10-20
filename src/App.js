import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      const result = this.calculate( input );
      Console.print(`결과 : ${result}`);
    } catch ( error ) {
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

}

export default App;