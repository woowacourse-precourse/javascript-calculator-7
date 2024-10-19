// @ts-check

import { GAME_MESSAGE } from '../constants/gameMessages.js';
import AddCalculator from '../models/AddCalculator.js';
import User from '../user/User.js';
import InputParser from '../util/InputParser.js';
import Validate from '../validation/Validate.js';
import outputView from '../view/outputView.js';

class App {
  constructor() {
    this.user = new User();
    this.validate = new Validate();
    this.inputParser = new InputParser();
    this.calculator = new AddCalculator();
  }

  /**@returns {Promise<void>} */
  async run() {
    const input = await this.user.readAnswer(GAME_MESSAGE.START);
    const validateInput = this.validate.validate(input);
    const numbers = this.inputParser.parse(validateInput);
    const result = this.calculator.calculate(numbers);
    outputView.printResult(result);
  }
}

export default App;
