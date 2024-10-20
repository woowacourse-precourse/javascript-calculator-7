import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try{
      let userInput = await Console.readLineAsync(`덧셈할 문자열을 입력해 주세요.\n`);
      userInput = userInput.replace("\\n", "\n");

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

    // 커스텀 구분자 추출 or 기본 구분자 사용
    const { delimiter, numbers } = this.extractCustomDelimiter(userInput);
    const splitNumbers = numbers.split(delimiter);
    console.log("Split Numbers:", splitNumbers);  // 디버깅: split 결과 확인

    // 분리된 문자열을 숫자로 변환하여 더하기
    const result = this.addNumbers(splitNumbers);
    return result;

  }

  /**
   * @author CWDll
   * @describe 숫자 변환 및 더하기
   * @parameter {Array<string>}
   * @returnValue {number}
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
   * @returnValue {number}
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

  /**
   * @author CWDll
   * @describe 커스텀 구분자 추출 함수
   * @parameter {string}
   * @returnValue {Object} : 구분자와 숫자 부분을 포함한 객체
   */
  extractCustomDelimiter(userInput) {
    let delimiter = /,|:/;  // 기본 구분자 쉼표(,)와 콜론(:)
    let numbers = userInput;

    // 커스텀 구분자가 있는지 확인 (//로 시작하는 경우)
    if (userInput.startsWith("//")) {
      const delimiterEndIndex = userInput.indexOf(`\n`);
      console.log("Delimiter End Index:", delimiterEndIndex);
      console.log("search값: ",userInput.search(`\n`));
      delimiter = userInput.substring(2, delimiterEndIndex);  // "//"와 "\n" 사이의 구분자 추출
      numbers = userInput.substring(delimiterEndIndex + 1);  // "\n" 이후의 숫자 부분 추출

      console.log("Custom Delimiter:", delimiter);
      console.log("Numbers:", numbers);

      // 구분자가 특수문자일 경우 이스케이프 처리
      delimiter = delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    return { delimiter, numbers };
  }
}

export default App;