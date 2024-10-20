import CalculatorController from './Controller.js';

class App {
  constructor() {
    this.controller = new CalculatorController();
  }

  async run() {
    await this.controller.run(); // 비동기 처리 후에 실행되도록 설정
  }
}

export default App;
