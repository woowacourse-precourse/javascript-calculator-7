import { Console } from "@woowacourse/mission-utils";
const findCustom = /^\/\/(.*?)\\n/;
const checkNumberRegex = /^[0-9]*$/;

class App {

  // 기본 구분자
  #REGEX = [",", ":"];
  #SUM = 0;

  // 숫자만 있는지 확인하는 함수
  checkNumber(array) {
    return array.every((data) => checkNumberRegex.test(data));
  }

  // 값 입력받는 함수
  startCalculator() {
    let userInput = Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    return userInput;
  }

  // 특수문자 구분자 이스케이프 처리 함수
  escapeRegExp() {
    return this.#REGEX
      .map((regex) => regex.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|");
  }

  // 메인 실행 함수
  async run() {
    // 문자열 입력 받기
    let input = await this.startCalculator();

    // 커스텀 구분자 있는지 확인
    if (findCustom.test(input)) {
      const customRegex = findCustom.exec(input);
      this.#REGEX.push(customRegex[1]);
      input = input.replace(findCustom, "");
    }

    const splitRegex = new RegExp(this.escapeRegExp());

    // 구분자로 문자열 나누기
    const inputArr = input.split(splitRegex);

    // 예외 처리
    if (!this.checkNumber(inputArr)) {
      throw new Error("[ERROR]");
    }

    // 변환한 값 더하고 출력
    const a = inputArr.map(Number);
    let sum = a.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    Console.print(`결과 : ${sum}`);
  }
};

export default App;
