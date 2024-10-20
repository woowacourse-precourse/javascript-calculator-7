import { Console } from "@woowacourse/mission-utils";


class App {
  async run() {

    Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n", (input) => {
      try {
        const result = this.add(input);
        // 결과 출력
        Console.print(`결과 : ${result}`);
      } catch (error) {
        // 에러 발생 시 출력
        Console.print(`[ERROR] ${error.message}`);
      }
    });
  }


  add(input) {
    if (input == "") {
      return 0; // 빈 문자열 처리
    }

    let delimiter = /,|:/; // 기본 구분자

    if (input.startsWith("//")) {
      const parts = input.split("\n");
      delimiter = new RegExp(parts[0].slice(2)); // 커스텀 구분자 추출
      input = parts[1]; // 문자열 부분 추출
    }

    let numbers = input.split(delimiter).map(num => {
      const parsedNum = Number(num);
      
      if (isNaN(parsedNum)) {
        throw new Error(`유효하지 않은 입력: ${num}`); // 숫자가 아닌 경우 에러 메시지
      }
      
      return parsedNum;
    });

    const negativeNumbers = numbers.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`음수는 허용되지 않습니다: ${negativeNumbers.join(", ")}`); // 숫자가 음수인 경우 에러 메시지
    }

    return this.sumNumbers(numbers); // 숫자의 합 계산
  }

  sumNumbers(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0); // 합계 계산
  }
}
export default App;
