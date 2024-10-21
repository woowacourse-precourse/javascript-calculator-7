import Model from './Model.js';
import View from './View.js';

class Controller {
  constructor() {
    this.view = new View();
  }

  async run() {
    try {
      const input = await this.view.getInput(); // 사용자 입력 받기
      const model = new Model(input); // 입력을 Model에 전달
      const result = model.calculate(); // 결과 계산
      this.view.printResult(result); // 결과 출력
    } catch (error) {
      throw error; // 에러 발생 시 처리
    }
  }
}

export default Controller;
