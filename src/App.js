import {Console} from "@woowacourse/mission-utils";


class App {
  async run() {
    try {
      let DELIMITERS = [",", ":"];
      let NUMBERS = [];

      // 입력
      const INPUT = await this.getInput();

      // 커스텀 구분자 파싱 후 숫자 입력만 반환
      const INPUT_NUMBERS = await this.customDelimiter(INPUT, DELIMITERS);

      // 숫자 파싱
      NUMBERS = await this.getNumbers(INPUT_NUMBERS, NUMBERS, DELIMITERS);

      // 합계 연산
      const SUM = await this.getSum(NUMBERS);

      // 결과 출력
    } catch (error) {}
  }

  // 입력
  async getInput() {
    const INPUT = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    return INPUT;
  }

  // 커스텀 구분자 파싱
  async customDelimiter(INPUT, DELIMITERS) {
    let START = 0;  
    let END = 2;

    // 앞부분에서 // 와 \n 사이에 있으면 모두 구분자
    while (INPUT.substring(START, END) == "//" && END < INPUT.length) {
      while (END < INPUT.length && INPUT.substring(END, END + 2) !== "\\n") {
        END++;
      }

      const NEW_DELIMITER = INPUT.substring(START + 2, END);

      // 구분자 배열에 push
      DELIMITERS.push(NEW_DELIMITER);

      // index 재설정
      START = END + 2;
      END = START + 2;
    }

    const INPUT_NUMBERS = INPUT.substring(START);
    return INPUT_NUMBERS;
  }

  // 숫자 파싱
  async getNumbers(INPUT, NUMBERS, DELIMITERS) {
    // split을 위해 구분자 한 문자열로 병합
    let splitD = DELIMITERS.join("");

    const REGEX = new RegExp(`[${splitD}]`, "g");

    // 숫자 split
    const STRING_NUMBERS = INPUT.split(REGEX);

    // 숫자 형태로 배열에 저장
    NUMBERS = STRING_NUMBERS.map(Number);

    return NUMBERS;
  }

  async getSum(NUMBERS) {
    let SUM = 0;

    for (let i = 0; i < NUMBERS.length; i++) {
      SUM += NUMBERS[i];
    }

    return SUM;
  }
}

export default App;
