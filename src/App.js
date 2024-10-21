import readline from 'readline';

class App {
  async run() {
    try {
      // 1. '덧셈할 문자열을 입력해 주세요.' 문구를 출력한다.
      this.promptMessage();

     
    } catch (error) {
      console.error(error.message);
    }
  }

  // 1. '덧셈할 문자열을 입력해 주세요.' 문구를 출력한다.
  promptMessage() {
    console.log('덧셈할 문자열을 입력해 주세요.');
  }

}

export default App;
