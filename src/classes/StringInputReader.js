import readline from 'readline';

class StringInputReader {
  getInput() {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question('덧셈할 문자열을 입력해 주세요: ', (input) => {
        resolve(input);
        rl.close();
      });
    });
  }
}

export default StringInputReader;
