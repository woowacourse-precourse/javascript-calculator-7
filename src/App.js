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
          
          // 숫자 확인 과정
          this.validateNumbers(numbers);
          //계산 후 반환
          return numbers.reduce((sum, num) => sum + num, 0);
        }
      
        
        validateNumbers(numbers) {
          //음수 체크
          const negatives = numbers.filter(n => n < 0);
          if (negatives.length > 0) {
            throw new Error("음수는 사용할 수 없습니다.");
          }
          
      
          //숫자가 아닌 문자 값 체크
          const invalidNumbers = numbers.filter(n => isNaN(n));
          if (invalidNumbers.length > 0) {
            throw new Error("잘못된 문자입니다.");
          }
        }
      
        escapeRegExp(string) {
          return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }
      }
      
      export default App;
      
      
