import readline from 'readline';

class App {
  async run() {
    try {
    // 1. '덧셈할 문자열을 입력해 주세요.' 문구를 출력한다.
      this.promptMessage();
		
	// 2. 문자열을 입력받는다.
      const userInput = await this.getInput();
     
    } catch (error) {
      console.error(error.message);
    }
  }

  // 1. '덧셈할 문자열을 입력해 주세요.' 문구를 출력한다.
  promptMessage() {
    console.log('덧셈할 문자열을 입력해 주세요.');
  }
	
	// 2. 문자열을 입력받는다 (Node.js 환경).
  getInput() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
	return new Promise((resolve) => {
    rl.question('', (input) => {
        rl.close();
        resolve(input); // 입력값을 반환
      });
    });
  }
}

export default App;
