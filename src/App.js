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
      }
