import readline from 'readline';

class App {
  async run() {
    try {
      // 1. '덧셈할 문자열을 입력해 주세요.' 문구를 출력한다.
      this.promptMessage();

      // 2. 문자열을 입력받는다.
      const userInput = await this.getInput();

      // 6. 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 확인하여 커스텀 구분자로 지정한다.
      const [customDelimiter, inputWithoutDelimiter] = this.checkCustomDelimiter(userInput);

      // 7. 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 기준으로도 문자열을 분리한다.
      const splitNumbers = this.splitInput(inputWithoutDelimiter, customDelimiter);

      // 4. 분리한 각 숫자들을 String에서 Number 타입으로 변환한다.
      const numberArray = this.toNumbers(splitNumbers);

      // 5. 변환한 Number 타입의 각 숫자들의 합을 계산한다.
      const totalSum = this.sumNumbers(numberArray);

      // 6. 계산된 합을 반환한다.
      console.log('계산된 합:', totalSum);
    } catch (error) {
      console.error(`[ERROR] ${error.message}`);
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

  // 6. 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 확인하여 커스텀 구분자로 지정한다.
  checkCustomDelimiter(input) {
    // 커스텀 구분자가 있는 경우: "//"로 시작하고 "\n"으로 구분자가 끝남
    if (input.startsWith("//")) {
      const delimiterEndIndex = input.indexOf("\n");
      const customDelimiter = input.substring(2, delimiterEndIndex); // "//"와 "\n" 사이의 문자 추출
      const inputWithoutDelimiter = input.substring(delimiterEndIndex + 1); // 구분자 이후의 문자열
      return [customDelimiter, inputWithoutDelimiter];
    }
    return [null, input]; // 커스텀 구분자가 없을 경우 null 반환
  }

  // 7. 기본 구분자 외에 커스텀 구분자를 기준으로도 문자열을 분리한다.
  splitInput(input, customDelimiter) {
    if (customDelimiter) {
      return input.split(new RegExp(`[${customDelimiter}]`)); // 커스텀 구분자로 분리
    }
    return input.split(/[,|:]/); // 기본 구분자 쉼표 또는 콜론으로 분리
  }

  // 4. 분리한 각 숫자들을 String에서 Number 타입으로 변환한다.
  toNumbers(strings) {
    const numbers = strings.map(Number);
    // 잘못된 입력이 있는 경우 에러 발생
    if (numbers.some(isNaN)) {
      throw new Error('잘못된 숫자 입력이 있습니다.'); // 잘못된 숫자 에러
    }
    return numbers;
  }

  // 5. 변환한 Number 타입의 각 숫자들의 합을 계산한다.
  sumNumbers(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
}

export default App;
