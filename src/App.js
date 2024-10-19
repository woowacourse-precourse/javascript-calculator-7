import {readLineAsync, print} from "./MissionUtils.js";

class App {
  async run() {
    const answer = await readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    if(answer === "") {
      this.printResult(0);
      return;
    }
  }

  printResult(result) {
    print('결과 : ' + result);
  }
}


export default App;
