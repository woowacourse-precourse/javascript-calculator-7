import { GAME_MESSAGE } from '../constants/gameMessages.js';
import Calculator from '../models/Calculator.js';
import User from '../user/User.js';
import InputParser from '../util/InputParser.js';
import { validateInput } from '../validation/validateInput.js';
import outputView from '../view/outputView.js';

class Game {
  constructor() {
    this.user = new User();
    this.inputParser = new InputParser();
    this.calculator = new Calculator();
  }

  async process() {
    const input = await this.user.readAnswer(GAME_MESSAGE.START);
    const validatedInput = validateInput(input);
    const numbers = this.inputParser.parse(validatedInput);
    const result = this.calculator.add(numbers);
    outputView.printResult(result);
  }
}

export default Game;
