import Calculator from '../model/Calculator.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/Outputview.js';

// InputView에서 입력을 받고 Model을 통해 처리한 후 OutputView로 출력
// 컨트롤러가 상태(인스턴스 변수 등)를 관리하기 때문에 클래스로 정의
class Controller {
  constructor() {
    this.caculator = new Calculator();
  }

  async process() {
    const isValid = await this.inputString();
    if (!isValid) return;
    OutputView.printResult(this.caculator.getSumNumbers());
  }

  async inputString() {
    const input = await InputView.readString();
    try {
      this.caculator.validateString(input);
      return true;
    } catch (error) {
      OutputView.printError(error.message);
      return false;
    }
  }
}

export default Controller;
