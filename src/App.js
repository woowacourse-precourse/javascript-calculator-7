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
      this.isValidCustom(input);

      const parts = input.split("\\n");  // 사용자가 입력한 "\n" 문자열을 기준으로 분리
      const customDelimiter = parts[0].substring(2);  // "//" 이후의 커스텀 구분자 추출
      delimiters = new RegExp(`[${customDelimiter},|:]`);  // 커스텀 구분자와 기본 구분자 포함
      numbersPart = parts[1];
    } else if (isNaN(input[0]) || input[0] === "-") { //커스텀 구분자가 아니거나, 음수로 시작하는 경우 처리
      throw new Error("커스텀 구분자를 사용하지 않는다면 양수로 시작해야 합니다.");
    }

    const numbers = numbersPart.split(delimiters).map(Number);
    numbers.forEach(number => this.isValidNumber(number)); //구분자,양수 이외의 값 존재여부 파악.
    Console.print("결과 : " + numbers.reduce((sum, number) => sum + number, 0));
  }

  isValidCustom(input) { //커스텀 구분자 유효성 검사
    if (input.indexOf("\\n") !== 3 || !isNaN(input[2])) {
      throw new Error("커스텀 구분자 양식이 잘못됐습니다.");
    }
  }

  isValidNumber(input) { //숫자 유효성 검사
    if (isNaN(input) || input < 1) {
      throw new Error("계산식에 구분자, 양수 이외의 값이 존재합니다.");
    }
  }


}

export default App;
