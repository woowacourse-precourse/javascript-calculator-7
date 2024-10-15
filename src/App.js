import { Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.separator = [':', ','];
    this.numbers = [];
  }

  async run() {
    // 1. 사용자에게 문자열을 입력 받는다.
    const STR = await this.readLine('덧셈할 문자열을 입력해 주세요.\n');
    // 2. 입력받은 문자열을 처리한다.
    this.processString(STR);
    // 3. 배열의 숫자를 모두 더해 반환한다.
    const RESULT = this.numbers.reduce((sum, cur) => sum + cur, 0);
    // 4. 반환된 숫자를 출력한다.
    this.printResult(`결과 : ${RESULT}`);
  }

  /**
   * message를 출력하고 사용자의 입력을 받는다.
   * @param message
   * @return {Promise<string>} 사용자의 입력값
   */
  readLine(message) {
    return Console.readLineAsync(message);
  }

  /**
   * 문자열을 처리하여 커스텀 구분자를 this.separator에 push하고
   * this.separator에 저장된 구분자들을 이용해 숫자들을 분리하여 배열에 저장한다.
   * @param str
   */
  processString(str) {
    // 커스텀 구분자를 배열에 저장하고 //와 \n을 제거한 문자열을 반환한다.
    const STRING_AFTER_PROCESS = this.processCustomSeparator(str);
    this.separateNumbers(STRING_AFTER_PROCESS); // 배열에 있는 모든 구분자를 통해 숫자를 분리해 배열에 저장한다.
    this.checkValidNumber(); // 숫자가 양수가 아니면 throw
  }

  /**
   * Error를 지정된 양식으로 throw 한다.
   */
  throwError() {
    throw new Error('[ERROR] 입력 값이 잘못되었습니다.');
  }

  /**
   * 커스텀 구분자를 분리해 this.separator에 push하고
   * 커스텀 구분자를 선언하는 부분을 제거한 문자열을 return 한다.
   * @param str
   * @return {string}
   * @throws {Error} 구분자가 1글자가 아닌 경우
   * @example
   * param = "1//;\n//-\n2"
   * return = "1;-2"
   */
  processCustomSeparator(str) {
    const REGEX = /\/\/(?<=\/\/)(.?)(?=\\n)\\n/g; // 커스텀 구분자 선언부에서 구분자만 캡처링할 수 있게
    const result = [...str.matchAll(REGEX)];
    result.forEach(matches => {
      if (matches[1].length !== 1) {
        this.throwError(); // 구분자가 1글자가 아닌 경우 throw. *요구 사항에서 구분자는 "문자"임
      }
      this.separator.push(matches[1]);
    }); // 구분자를 this.speparator에 push
    return str.replaceAll(REGEX, ''); // return은 커스텀 구분자 선언부를 제거한 문자열
  }

  /**
   * 문자열을 this.separator에 있는 구분자를 사용하여 split한다.
   * split된 배열을 검사하여 양수인지 확인하고 아닌경우 throw한다.
   * @param str
   * @throws {Error} 배열에 양수가 아닌 문자열이 포함된 경우
   */
  separateNumbers(str) {
    const REGEX = new RegExp(`[${this.separator.join('')}]`, 'g');
    const SPLITTED_STR = str.split(REGEX);
    SPLITTED_STR.forEach(string => {
      if (!this.isNumber(string)) {
        this.throwError();
      }
      this.numbers.push(Number.parseInt(string, 10));
    });
  }

  /**
   * 숫자로만 이루어진 문자열인지 확인한다.
   * @param str
   * @return {boolean} 숫자로만 이루어진 문자열인 경우 true
   */
  isNumber(str) {
    const REGEX = /[^-+0-9]/;
    return !REGEX.test(str);
  }

  /**
   * this.numbers의 숫자들이 허용 범위(양수) 안에 있는지 확인한다.
   * @throws {Error} 숫자가 양수가 아닐 때
   */
  checkValidNumber() {
    this.numbers.forEach(number => {
      if (number <= 0 || !number) this.throwError(); // 양수가 아니거나 NaN인 경우 throw
    });
  }

  /**
   * message를 콘솔에 출력한다.
   * @param message
   */
  printResult(message) {
    Console.print(message);
  }
}

export default App;
