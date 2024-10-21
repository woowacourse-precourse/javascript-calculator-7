import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // 사용자로부터 문자열 입력 받기
      const input = await this.inputStr();
      const result = this.calculateSum(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  async inputStr() {
    return await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
  }

  calculateSum(input) {
    // 입력값이 없으면 0 반환
    if (!input) return 0; 

    import { Console } from "@woowacourse/mission-utils";

    class App {
      async run() {
        try {
          // 사용자로부터 문자열 입력 받기
          const input = await this.inputStr();
          const result = this.calculateSum(input);
          Console.print(`결과 : ${result}`);
        } catch (error) {
          Console.print(`[ERROR] ${error.message}`);
        }
      }
    
      async inputStr() {
        return await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      }
    
      calculateSum(input) {
        // 입력값이 없으면 0 반환
        if (!input) return 0; 
    
    
        // 기본 구분자 설정 (, 또는 :)
        let delimiter = /,|:/; 
        // 커스텀 구분자 설정
        if (input.startsWith("//")) {
            const newlineIndex = input.indexOf("\\n");
            if (newlineIndex === -1) {
              throw new Error("잘못된 형식입니다."); 
            }
            
          //커스텀 구분자 추출
            const customDelimiter = input.substring(2, newlineIndex);
            delimiter = new RegExp(this.escapeRegExp(customDelimiter));
          //숫자 부분만 남기고 커스텀 구분자 제거
            input = input.slice(newlineIndex + 2);
          }
      
          const numbers = input.split(delimiter).map(Number);
          

      }
    }
  }
}