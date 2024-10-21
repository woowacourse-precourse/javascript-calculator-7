import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants.js';
import StringCalculator from './StringCalculator.js';
import InputParser from './InputParser.js';
import NumberValidator from './NumberValidator.js';

export default class App {
  constructor() {
    const inputParser = new InputParser();
    const numberValidator = new NumberValidator();
    this.calculator = new StringCalculator(inputParser, numberValidator);
  }

  async run() {
    try {
      const input = await this.getInput();
      const result = this.calculator.calculate(input);
      this.printResult(result);
    } catch (error) {
      this.printError(error);
      throw error;
    }
  }

  async getInput() {
    return await Console.readLineAsync(MESSAGES.INPUT_PROMPT);
  }

  printResult(result) {
    Console.print(MESSAGES.RESULT + result);
  }

  printError(error) {
    Console.print(error.message);
  }
}