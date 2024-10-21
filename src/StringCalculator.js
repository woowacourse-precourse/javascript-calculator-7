class StringCalculator {
    add(numbers) {
      // 1. 빈 문자열 입력 시 0을 반환
      if (!numbers) {
        return 0;
      }
      // 2. 쉼표와 콜론 구분자를 사용한 기본 덧셈 기능 추가
      const delimiters = /[,:]/; // 쉼표와 콜론을 구분자로 사용
      const splitNumbers = numbers.split(delimiters);
    
      // 문자열을 숫자로 변환하고 합계 계산
      return splitNumbers.reduce((sum, num) => sum + parseInt(num, 10), 0);
    }
  }
  
  export default StringCalculator;
  