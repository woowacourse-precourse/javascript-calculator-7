import View from './View.js';
import Validator from './Validator.js';
import Calculator from './Calculator.js';
import Delimiter from './Delimiter.js';
import SchemaValidator from '../lib/SchemaValidator.js';

class App {
  /** @type {View} */
  #view;

  /** @type {Validator} */
  #validator;

  /** @type {Calculator} */
  #calculator;

  /**
   *
   * @param {View} view
   * @param {Validator} validator
   * @param {Calculator} calculator
   */
  constructor(view, validator, calculator) {
    this.#view = view;
    this.#validator = validator;
    this.#calculator = calculator;
  }

  async run() {
    const input = await this.#view.input('덧셈할 문자열을 입력해 주세요.');

    this.#validator.validate(input);

    const result = this.#calculator.calculate(input);

    this.#view.output(`결과 : ${result}`);
  }
}

export default new App(
  new View(),
  new Validator(new SchemaValidator(), new Delimiter()),
  new Calculator(new Delimiter()),
);
