import Model from './Model.js';
import View from './View.js';

class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
  }

  async run() {
    try {
      const input = await this.view.getInput(); // 사용자 입력 받기
      const result = this.model.calculate(input); // 입력을 처리하고 결과 계산
      this.view.printResult(result); // 결과 출력
    } catch (error) {
      this.view.printError(error); // 에러 발생 시 에러 메시지 출력
    }
  }
}

export default Controller;
