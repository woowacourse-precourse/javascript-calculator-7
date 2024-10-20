class App {
  async run() {

    const input = promt("덧셈할 문자열을 입력해 주세요.\n");

    try {
      const result = this.add(input);
      console.log(`결과 : ${result}`);
    } catch (error) {
      console.error(`[ERROR] ${error.message}`);
    }
  }

  add(input) {
    if (input == "") {
      return 0; // 빈 문자열 처리
    }
  }
}
export default App;
