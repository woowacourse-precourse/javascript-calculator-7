class App {
  async run() {
    try {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n'); // 문자열 입력
    } catch (error) {
      this.handleError(); // 예외 처리
    }
  }

  // 1. 예외 처리 함수
  handleError() {
    Console.print('[ERROR]');
    throw new Error('[ERROR]');
  }

  // 2. 입력된 문자열 검증
	validateInput(input) {
	  if (!input) {
	    return '0'; // 빈 문자열일 때 '0' 반환
	  }
	  return input;
	}

  // 3. 구분자 판단 (기본 구분자 또는 커스텀 구분자)
  getDelimiter(input) {
    if (input.startsWith('//')) {
      const customDelimiterMatch = input.match(/^\/\/(.)\\n(.*)$/);
      if (customDelimiterMatch) {
        const [, customDelimiter, numbers] = customDelimiterMatch;
        return { delimiter: new RegExp(`[${customDelimiter}]`), numbers };
      }
      this.handleError();
    }
    return { delimiter: /[,:]/, numbers: input };
  }

}

export default App;
