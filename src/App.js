import { calculate } from './models/CalculatorModel.js';
import {
  getUserInput,
  displayErrorMessage,
  resultOutput,
} from './views/CalculatorView.js';

class App {
  async run() {
    try {
      const input = await getUserInput(); // 입력을 비동기로 받기
      const result = calculate(input); // Model에서 에러 발생 가능
      resultOutput(result);
    } catch (error) {
      displayErrorMessage(error.message); // View에서 에러 출력
      throw error; // 에러를 다시 던지기
    }
  }
}
export default App;
