import { match } from 'assert';
import { log } from 'console';
import readline from 'readline';

class App {
  async run() {
    const inandout_value = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    inandout_value.question('값을 입력하세요: ', (userInput) => {
      try {
        const result = this.add(userInput);
        console.log(`결과: ${result}`);
      } catch (error) {
        console.log("에러발생");
      }
      inandout_value.close();
    });
  }

  add(input) {
    const rule = /,|:/;
    const nums = input.split(rule).map((num) => {
      return Number(num);
    });
    return nums.reduce((sum, num) => sum + num, 0);
  }
}

export default App;
