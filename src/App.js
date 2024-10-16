import { readFileSync } from 'fs';
import readline from 'readline';

class App {
  async run() {
    // 1. 입출력 기능 -  입력 : '덧셈할 문자열을 입력해 주세요.\n', 한 줄로 입력받기
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })
    
    rl.question('덧셈할 문자열을 입력해 주세요.\n', (input) => {
      // 결과 출력
      console.log(`결과 : ${input}`); // 후에 출력값으로 바뀔 예정
      rl.close();
    })
  }
}

export default App;