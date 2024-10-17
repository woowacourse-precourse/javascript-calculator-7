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

}

export default App;
