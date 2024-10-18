import { runCalculator } from './Calculator.js';

// App의 실행 여부를 관리하기 위한 변수
let hasRun = false;

class App {
  async run() {
    // 이미 실행된 경우, 중복 실행 방지
    if (hasRun) return;
    hasRun = true;

    // Calculator 실행
    await runCalculator();
  }
}

export default App;