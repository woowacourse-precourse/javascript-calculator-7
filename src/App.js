import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    Console.print('덧셈할 문자열을 입력해 주세요.');
    const input = await Console.readLineAsync('');

    if (input === "") { //빈문자열 처리
      Console.print("결과 : 0");
    }

    try {
      this.sum(input);
    }
    catch (error) {
      Console.print("[ERROR] " + error.message);
    }
  }

  sum(input) { //덧셈 함수
    let delimiters = /[,|:]/;
    let numbersPart = input;

    if (input.startsWith("//")) { // 커스텀 구분자 처리
      const parts = input.split("\\n");  // 사용자가 입력한 "\n" 문자열을 기준으로 분리
      const customDelimiter = parts[0].substring(2);  // "//" 이후의 커스텀 구분자 추출
      delimiters = new RegExp(`[${customDelimiter},|:]`);  // 커스텀 구분자와 기본 구분자 포함
      numbersPart = parts[1];
    }

    const numbers = numbersPart.split(delimiters).map(Number);
    Console.print("결과 : " + numbers.reduce((sum, number) => sum + number, 0));
  }
}

export default App;
