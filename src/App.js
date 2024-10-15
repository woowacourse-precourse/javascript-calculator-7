import InputHandler from './InputHandler.js';

class App {
  async run() {
    try {
      const input = await InputHandler.getInput();
      console.log('입력받은 문자열:', input);
    } catch (error) {
      console.error('[ERROR]', error.message);
    }
  }
}

export default App;
