import readline from 'readline';

class App {
  async run() {
    try {
    // 1. '덧셈할 문자열을 입력해 주세요.' 문구를 출력한다.
      this.promptMessage();
	// 2. 문자열을 입력받는다.
      const userInput = await this.getInput();
	// 3. 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한다.
      const splitNumbers = this.splitInput(userInput);
	// 4. 분리한 각 숫자들을 String에서 Number 타입으로 변환한다.
      const numberArray = this.toNumbers(splitNumbers);
	// 5. 변환한 Number 타입의 각 숫자들의 합을 계산한다.
      const totalSum = this.sumNumbers(numberArray);
	// 6. 계산된 합을 반환한다.
      console.log('계산된 합:', totalSum);
		
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
	  // 3. 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한다.
  splitInput(input) {
    return input.split(/[,|:]/); // 쉼표 또는 콜론을 기준으로 분리
  }
	  // 4. 분리한 각 숫자들을 String에서 Number 타입으로 변환한다.
  toNumbers(strings) {
    return strings.map(Number);
  }
// 5. 변환한 Number 타입의 각 숫자들의 합을 계산한다.
  sumNumbers(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
}

export default App;
