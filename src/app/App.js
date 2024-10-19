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

  /** @type {Delimiter} */
  #delimiter;

  /** @type {Calculator} */
  #calculator;

  /**
   *
   * @param {View} view
   * @param {Validator} validator
   * @param {Delimiter} delimiter
   * @param {Calculator} calculator
   */
  constructor(view, validator, delimiter, calculator) {
    this.#view = view;
    this.#validator = validator;
    this.#delimiter = delimiter;
    this.#calculator = calculator;
  }

  async run() {
    const input = await this.#view.input('덧셈할 문자열을 입력해 주세요.');

    const delimitedInputs = this.#delimiter.splitByDelimiters(input);

    this.#validator.validate(delimitedInputs);

    const result = this.#calculator.calculate(delimitedInputs);

    this.#view.output(`결과 : ${result}`);
  }
}

export default new App(
  new View(),
  new Validator(new SchemaValidator()),
  new Delimiter(),
  new Calculator(),
);
