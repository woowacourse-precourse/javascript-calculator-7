import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try{
      const userInput = await Console.readLineAsync(`덧셈할 문자열을 입력해 주세요.\n`);
      const result = this.calculate(userInput);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  /**
  *   @author CWDll
  *   @describe 입력받은 문자열을 계산하는 함수
  *   @parameter {string}
  *   @returnValue {number}
  */
  calculate(userInput) {
    if(userInput === "") {
      return 0;
    }

    // 기본 구분자인 쉼표(,)와 콜론(:)으로 문자열을 분리
    const splitNumbers = userInput.split(/,|:/);

    // 분리된 문자열을 숫자로 변환하여 더하기
    const result = this.addNumbers(splitNumbers);
    return result;

  }

  /**
   * @author CWDll
   * @describe 숫자 변환 및 더하기
   * @parameter {Array<string>}
   * @returns {number}
   */
  addNumbers(splitNumbers) {
    return splitNumbers.reduce((sum, current) => {
      const number = this.validateAndConvert(current);  // 숫자 변환 및 검증
      return sum + number;
    }, 0);
  }

  /**
   * @author CWDll
   * @describe 입력값 검증 및 변환
   * @parameter {string}
   * @returns {number}
   * @throws {Error} 유효하지 않은 입력일 경우 예외 발생
   */
  validateAndConvert(value) {
    const number = parseInt(value, 10);

    // 유효하지 않은 숫자 또는 음수일 경우 예외 발생
    if (isNaN(number) || number < 0) {
      throw new Error("잘못된 입력값입니다.");  // [ERROR] 메시지를 개선
    }
    return number;
  }

}

export default App;