class StringCalculator {
    add(numbers) {
      // 1. 빈 문자열 입력 시 0을 반환
      if (!numbers) {
        return 0;
      }
      // 2. 쉼표와 콜론 구분자를 사용한 기본 덧셈 기능 추가
      let delimiters = /[,:]/; // 쉼표와 콜론을 구분자로 사용

      numbers = numbers.replace(/\\n/, "\n");

      if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf("\n");
        if (delimiterEndIndex === -1) {
            throw new Error("[ERROR] 입력 형식이 올바르지 않습니다.");
        }

        const customDelimiter = numbers.substring(2, delimiterEndIndex);
        if(customDelimiter.length === 0) {
            throw new Error("[ERROR] 커스텀 구분자가 올바르지 않습니다.");
        }

        delimiters = new RegExp(`[${customDelimiter},:]`);
        numbers = numbers.substring(delimiterEndIndex + 1);
      }

      const splitNumbers = numbers.split(delimiters);

      // 음수 및 유효하지 않은 입력 처리
      splitNumbers.forEach(num => {
        const parsedNum = parseInt(num, 10);
        if (isNaN(parsedNum)) {
            throw new Error("[ERROR] 유효하지 않은 숫자 입력입니다.");
        }
        if (parsedNum < 0) {
            throw new Error("[ERROR] 음수는 허용되지 않습니다.")
        }
      });

      // 문자열을 숫자로 변환하고 합계 계산
      return splitNumbers.reduce((sum, num) => sum + parseInt(num, 10), 0);
    }
  }
  
  export default StringCalculator;
  