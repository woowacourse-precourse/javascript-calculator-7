import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    Console.print('덧셈할 문자열을 입력해 주세요.');
    const input = await Console.readLineAsync('');

    if (input === "") {
      return Console.print("결과 : 0");
    }

    return this.sum(input);
  }

  sum(input) {
    let delimiters = /[,|:]/;
    let numbersPart = input;

    // 커스텀 구분자 처리
    if (input.startsWith("//")) {
      this.isValidCustom(input);
      const parts = input.split("\\n");

      // "//" 이후의 커스텀 구분자 추출
      const customDelimiter = parts[0].substring(2);

      // 커스텀 구분자와 기본 구분자 포함
      delimiters = new RegExp(`[${customDelimiter},|:]`);
      numbersPart = parts[1];
    } else if (isNaN(input[0]) || input[0] === "-") {
      throw new Error("[ERROR] 커스텀 구분자를 사용하지 않는다면 양수로 시작해야 합니다.");
    }

    const numbers = numbersPart.split(delimiters).map(Number);

    //구분자,양수 이외의 값 존재여부 파악.
    numbers.forEach(number => this.isValidNumber(number));
    Console.print("결과 : " + numbers.reduce((sum, number) => sum + number, 0));
  }

  //커스텀 구분자 유효성 검사
  isValidCustom(input) {
    if (input.indexOf("\\n") !== 3 || !isNaN(input[2])) {
      throw new Error("[ERROR] 커스텀 구분자 양식이 잘못됐습니다.");
    }
  }

  //숫자 유효성 검사
  isValidNumber(input) {
    if (isNaN(input) || input < 1) {
      throw new Error("[ERROR] 계산식에 구분자, 양수 이외의 값이 존재합니다.");
    }
  }
}

export default App;
