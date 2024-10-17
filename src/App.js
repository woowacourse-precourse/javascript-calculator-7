import Calculator from "./Calculator.js"
class App {
  async run() {
    console.log('문자열 덧셈 계산기를 실행합니다.');
    
    const calculator = new Calculator();

    await calculator.start();
  }
}

export default App;
