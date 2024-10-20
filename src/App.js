class App {
  async run() {
    const input = await this.getInput();
    const result = this.add(input);
    this.printResult(result);
  }

  async getInput() {
    const { Console } = require('@woowacourse/mission-utils');
    return new Promise((resolve) => {
      Console.readLine('덧셈할 문자열을 입력해 주세요.\n', resolve);
    });
  }

  add(input) {
    // 빈 문자열이면 0을 반환
    if (input === "") {
      return 0;
    }
    // 커스텀구분자, 잘못된입력 시 대응을 구현할 자리
  }

  printResult(result) {
    const { Console } = require('@woowacourse/mission-utils');
    Console.print(`결과 : ${result}`);
  }
}

export default App;
