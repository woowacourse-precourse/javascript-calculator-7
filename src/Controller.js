import { UserInterface } from './UserInterface.js';

const user = new UserInterface();

export class Controller {
  constructor() {
    const IntputString = '';
  }
  async getUserInput() {
    this.inputString = await user.getInputString();
  }
}
