import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      const result = this.addNumbers(input);
      Console.print(`결과 : ${result}`);
  }
  addNumbers(input) {
      const delimiters = [',', ':']; // 기본 구분자 배열
      const numbers = delimiters.reduce((acc, delimiter) => {
          return acc.flatMap(str => str.split(delimiter));
      }, [input]); // 구분자를 기준으로 문자열 분리

      Console.print(numbers); // numbers 출력
      
      return numbers;
  }
}

export default App;
