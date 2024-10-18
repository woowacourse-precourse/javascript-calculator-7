import View from './View.js';
import Validator from './Validator.js';
import Calculator from './Calculator.js';
import Delimiter from './Delimiter.js';

class App {
  /** @type {View} */
  #view;

  /** @type {Validator} */
  #validator;

  /** @type {Delimiter} */
  #delimiter;

  /** @type {Calculator} */
  #calculator;

  constructor(view, validator, delimiter, calculator) {
    this.#view = view;
    this.#validator = validator;
    this.#delimiter = delimiter;
    this.#calculator = calculator;
  }

  async run() {
    try {
      const input = await this.#view.input('덧셈할 문자열을 입력해 주세요.');

      const delimitedString = this.#delimiter.getDelimitedString(input);

      this.#validator.validate(delimitedString);

      const result = this.#calculator.calculate(delimitedString);

      this.#view.output(`결과 : ${result}`);
    } catch (error) {
      this.#view.output(error);
    }
  }
}

export default App;
