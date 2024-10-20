import InputHandler from "./IOHandler.js";
import Calculator from "./Calculator.js";

class App {
  constructor() {
    this.IOHandler = new InputHandler();
    this.Calculator = new Calculator();
  }

  async run() {
    try {
      // 값 입력받기
      const input = await this.IOHandler.getInput();

      // 계산하기
      const result = this.Calculator.calculate(input);

      // 합 출력
      this.IOHandler.print(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default App;
