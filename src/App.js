import { Console } from "@woowacourse/mission-utils";


class App {
  async run() {

    return new Promise((resolve, reject) => {
      Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n").then((input) => {
        try {
          const RESULT = this.add(input);
          Console.print(`결과 : ${RESULT}`);
          resolve(); // 성공적으로 실행되면 resolve 호출
        } catch (error) {
          Console.print(`[ERROR] ${error.message}`);
          //reject(error); // 에러 발생 시 reject 호출
        }
      }).catch((error) => {
        Console.print(`[ERROR] ${error.message}`);
        reject(error);
      });
    });
  }


  add(input) {
    if (input == "") {
      return 0; // 빈 문자열 처리
    }

    let delimiter = /,|:/; // 기본 구분자

    if (input.startsWith("//")) {
      const PARTS = input.split("\\n");
      delimiter = PARTS[0].slice(2); // 커스텀 구분자 추출
      input = PARTS[1]; // 문자열 부분 추출
    }

    let numbers = input.split(delimiter).map(num => {
      const PARSEDNUM = Number(num);
      
      if (isNaN(PARSEDNUM)) {
        throw new Error(`유효하지 않은 입력: ${num}`); // 숫자가 아닌 경우 에러 메시지
      }
      
      return PARSEDNUM;
    });

    const NEGATIVENUMBERS = numbers.filter(num => num < 0);
    if (NEGATIVENUMBERS.length > 0) {
      throw new Error(`음수는 허용되지 않습니다: ${NEGATIVENUMBERS.join(", ")}`); // 숫자가 음수인 경우 에러 메시지
    }

    return this.sumNumbers(numbers); // 숫자의 합 계산
  }

  sumNumbers(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0); // 합계 계산
  }
}
export default App;
