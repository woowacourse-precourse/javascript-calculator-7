import Calculator from './Calculator.js';

class App {
  constructor() {
    // 이미 인스턴스가 존재하는 경우, 해당 인스턴스 반환
    if (App.instance) {
      return App.instance;
    }

    App.instance = this;
    this.hasRun = false;
    console.log('App instance created');
  }

  async run() {
    // 이미 실행된 경우, 중복 실행 방지
    if (this.hasRun) return;
    this.hasRun = true;

    const calculator = new Calculator();
    await calculator.run();
  }
}

const app = new App();
app.run();

export default App;
