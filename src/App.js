import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // 사용자로부터 문자열 입력 받기
      const input = await this.inputStr();
      
      // 입력된 문자열을 계산하여 결과 출력
      const result = this.calculateSum(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      // 에러 발생 시 메시지 출력
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  async inputStr() {
    return await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
  }

  calculateSum(input) {
    // 입력값이 없으면 0 반환
    if (!input) return 0; 

    // 기본 구분자 설정 (쉼표 또는 콜론)
    let delimiter = /,|:/; 
    // 커스텀 구분자 설정
    if (input.startsWith("//")) {
      const newlineIndex = input.indexOf("\\n");
      if (newlineIndex === -1) {
        throw new Error("잘못된 형식입니다."); 
      }
      
      // 커스텀 구분자 추출 및 정규식 변환
      const customDelimiter = input.substring(2, newlineIndex);
      delimiter = new RegExp(this.escapeRegExp(customDelimiter));
      // 숫자 부분만 남기고 구분자 부분 제거
      input = input.slice(newlineIndex + 2);
    }

    // **구분자를 기준으로 문자열을 숫자로 변환**
    const numbers = input.split(delimiter).map(Number);
    
    // **숫자 확인 작업**
    this.validateNumbers(numbers);

    // 숫자의 합 계산 후 반환
    return numbers.reduce((sum, num) => sum + num, 0);
  }

  validateNumbers(numbers) {
    // 음수 체크 및 에러 발생
    const negatives = numbers.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error("음수는 사용할 수 없습니다.");
    }
    
    // 숫자가 아닌 값 체크 및 에러 발생
    const invalidNumbers = numbers.filter(n => isNaN(n));
    if (invalidNumbers.length > 0) {
      throw new Error("잘못된 문자입니다.");
    }
  }

  escapeRegExp(string) {
    // 정규식 특수 문자를 이스케이프 처리하는 함수
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

export default App;
