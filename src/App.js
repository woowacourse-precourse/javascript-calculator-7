class App {
  async run() {
    const input = await this.getInput(); // 입력 메소드 사용
    try {
      const numbers = this.extractNumbers(input); // 숫자 추출 메소드 사용
      const result = this.calculateSum(numbers); // 합 계산 메소드 사용
      this.printResult(result); // 결과 출력 메소드 사용
    } catch (error) {
      this.handleError(error); // 에러 처리 메소드 사용
    }
  }
}

// 입력: 사용자에게 덧셈할 문자열을 입력받는 메소드
getInput() {
  return new Promise((resolve) => {
    console.log('덧셈할 문자열을 입력해 주세요.'); 
    process.stdin.once('data', (data) => {
      resolve(data.toString().trim()); 
    });
  });
}

 // 기본 구분자 기준 분리: 쉼표(,) 또는 콜론(:)을 구분자
splitNumbers(numbers, delimiter) {
  return numbers.split(new RegExp(`[${delimiter},:]`));
}

// 커스텀 구분자 기준 분리: "//"와 "\n" 사이에 위치하는 문자인 커스텀 구분자를 기준
extractDelimiter(input) {
  if (input.startsWith("//")) { 
    const [delimiterLine, ...numberLines] = input.split('\n'); 
    const delimiter = delimiterLine.substring(2); 
    const numbers = numberLines.join('\n'); 
    return [delimiter, numbers]; 
  }
  return [',', input]; 
}

// 숫자 변환: 분리한 문자를 숫자로 변환하는 메소드
convertToNumbers(numbers) {
  return numbers.map(num => Number(num)); 
}

// 합 계산: 분리한 각 숫자의 합을 반환하는 메소드
calculateSum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0); 
}

// 출력: 덧셈 결과를 출력하는 메소드
printResult(result) {
  console.log(`결과 : ${result}`); 
}

// 에러 처리: 사용자가 잘못된 값을 입력할 경우, "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시키는 메소드
handleError(error) {
  console.log(`[ERROR] ${error.message}`); // 오류 메시지 출력
  process.exit(1); // 애플리케이션 종료
}

export default App;
