import {Console} from "@woowacourse/mission-utils";

class App {
  inputValue = ""
  async run() {
    this.inputValue = this.input()

  }
  input(){
    return Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n")
  }

}

export default App;
