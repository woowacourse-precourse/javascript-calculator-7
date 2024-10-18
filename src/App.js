import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      const result = this.calculateSum(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print("[ERROR]" + error.message);
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
      delimiter += '|\\' + custom; // 커스텀 구분자 추가
      input = input.replace(/^\/\/.\\n/, ''); // 커스텀 구분자 선언부 제거
    }

    const numbers = input.split(new RegExp(delimiter)).map(Number); //정규표현식으로 구분자를 찾음
    let sum1 = 0; //기본을 0으로 두고 for문을 통해 숫자 합산
    for (let i = 0; i < numbers.length; i++) {
      sum1 += numbers[i];
    }
    return sum1;
  }
}

export default App;
