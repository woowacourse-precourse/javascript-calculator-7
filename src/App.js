// @ts-check

import Game from './controller/Game.js';

class App {
  constructor() {
    this.game = new Game();
  }

  async run() {
    await this.game.process();
  }
}

export default App;
