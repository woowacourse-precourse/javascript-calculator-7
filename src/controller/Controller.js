// InputView에서 입력을 받고 Model을 통해 처리한 후 OutputView로 출력

// 컨트롤러가 상태(인스턴스 변수 등)를 관리하기 때문에 클래스로 정의
class Controller {
  async process() {
    console.log('Controller');
  }
}

export default Controller;
