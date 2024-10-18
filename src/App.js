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
    this.printResult(`결과 : ${this.parseResult(RESULT)}`);
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
    // 커스텀 구분자를 배열에 저장하고 문자열 앞부분의 //와 \n을 제거한 문자열을 반환한다.
    const STRING_AFTER_PROCESS = this.processCustomSeparator(str);
    this.separateNumbers(STRING_AFTER_PROCESS); // 배열에 있는 모든 구분자를 통해 숫자를 분리해 배열에 저장한다.
  }

  /**
   * Error를 지정된 양식으로 throw 한다.
   */
  throwError() {
    throw new Error('[ERROR] 입력 값이 잘못되었습니다.');
  }

  /**
   * 문자열 앞에서부터 커스텀 구분자를 분리해 this.separator에 push하고
   * 커스텀 구분자를 선언하는 부분을 제거한 문자열을 return 한다.
   * @param str
   * @return {string}
   * @example
   * param = "//;\n//-\n1;2-3"
   * return = "1;2-3"
   */
  processCustomSeparator(str) {
    const REGEX = /^\/\/.\\n/; // 문자열 앞부분에 //.\n 형식이 있는 경우
    while (str.match(REGEX)) {
      this.separator.push(str[2]);
      str = str.substring(5);
    }
    return str;
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
      this.checkValidNumber(string);
      this.numbers.push(parseFloat(string));
    });
  }

  /**
   * this.numbers의 숫자들이 허용 범위(양수) 안에 있는지 확인한다.
   * @throws {Error} 숫자가 양수가 아닐 때, 숫자가 아닌 문자가 포함된 경우
   */
  checkValidNumber(str) {
    const REGEX = /[^0-9.\-+]/
    /*
    javascript의 parse함수는 앞에서부터 parse가 가능한 부분까지 처리 후 반환한다. ex) 3a4 -> 3
    따라서 별도의 문자열 검사가 필요함.
     */
    if (REGEX.test(str)) {
      this.throwError();
    }
    const NUM = parseFloat(str);
    if (isNaN(NUM) || NUM <= 0) {
      this.throwError();
    }
  }

  /**
   * message를 콘솔에 출력한다.
   * @param message
   */
  printResult(message) {
    Console.print(message);
  }

  /**
   * param을 출력 양식에 맞게 변형한다.
   * @param num
   * @return {number} 정수 : num<br>실수 : 소수점 셋째 자리에서 반올림한 값
   */
  parseResult(num) {
    if (num % 1 === 0) return num;
    return Math.round(num * 1000) / 1000;
  }
}

export default App;
