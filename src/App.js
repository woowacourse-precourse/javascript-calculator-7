class App {
  async run() {}

  // 1. 예외 처리 함수
  handleError() {
    Console.print('[ERROR]');
    throw new Error('[ERROR]');
  }
  
}

export default App;
