import IOHandler from './IOHandler.js'; 
import StringParser from './StringParser.js';

class App {
  constructor() {
    this.ioHandler = new IOHandler;
    this.stringParser = new StringParser;
  }

  async run() {
    const input = await this.ioHandler.input();
    
    while (this.stringParser.cursor < input.length) {
      const char = input[this.stringParser.cursor];

      if (char === '/') { 
        this.stringParser.handleCustomSeparator(char, input);
      } else if (isNaN(Number(char))) { 
        this.stringParser.handleNotNumber(char, input);
      } else { 
        this.stringParser.handleNumber(char, input);
      }
    }

    this.ioHandler.print(this.stringParser.sum);
  }
}

export default App;
