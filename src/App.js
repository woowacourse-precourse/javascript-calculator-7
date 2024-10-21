import { log } from 'console';
import readline from 'readline';

class App {
  async run() {
    const inandout_value = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    inandout_value.question('값을 입력하세요: ', (userInput) => {
      console.log('결과:', userInput);
    });
  }
}

export default App;
