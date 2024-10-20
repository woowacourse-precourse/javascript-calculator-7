import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // 사용자로부터 문자열 입력받기
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

      const numbers = this.parseInput(input);

      const sum = this.sumNumbers(numbers);

      Console.print(`결과 : ${sum}`);

    } catch (error) {
      // reject 되는 경우
    }
  }

  // 문자열 파싱
  parseInput(input){
    let delimiter = /,|:/; // 정규식을 사용하여 구분자 여러개 설정

    return input.split(delimiter).map((num) => parseInt(num));
  }
  // 숫자의 합 계신
  sumNumbers(numbers){
    return numbers.reduce((acc, num) => acc + num, 0);
  }
}

export default App;
