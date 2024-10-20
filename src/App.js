import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      const result = this.calculateSum(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  getCustomDelimiter(input) { // 커스텀 구분자를 찾는 과정. 찾아서 저장
    const customDelimiterMatch = input.match(/^\/\/(.)\\n/);
    return customDelimiterMatch ? customDelimiterMatch[1] : null;
  }

  calculateSum(input) {
    let delimiter = ',|:'
    const custom = this.getCustomDelimiter(input); // 커스텀 구분자 찾음

    if (custom) {
      delimiter += '|' + custom; // 커스텀 구분자 추가
      input = input.replace(/^\/\/.\\n/, ''); // 커스텀 구분자 선언부 제거
    }

    const numbers = input.split(new RegExp(delimiter)).map(num => { //정규표현식으로 구분자를 찾음
      const parsed = parseInt(num, 10);
      if (isNaN(parsed)){
        throw new Error("[ERROR] 숫자가 아닙니다.");
      }
      else if (parsed < 0) {
        throw new Error("[ERROR] 음수는 허용되지 않습니다.");
      }
      return parsed;
    }); 

    let sum = 0; //기본을 0으로 두고 for문을 통해 숫자 합산
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }

}

export default App;
