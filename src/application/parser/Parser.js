import { DEFAULT_DELIMITERS } from '../../constant/DELIMITER.js';
import InputSeparator from './InputSeparator.js';
import NumberSplitter from './NumberSplitter.js';
import Validator from '../../validation/Validator.js';

export default class Parser {
  #delimiters;

  #inputSeparator;

  #numberSplitter;

  #validator;

  constructor() {
    this.#delimiters = Object.values(DEFAULT_DELIMITERS);
    this.#inputSeparator = new InputSeparator();
    this.#numberSplitter = NumberSplitter;
    this.#validator = Validator;
  }

  parse(rawInput) {
    const delimiter = this.#inputSeparator.getCustomDelimiter(rawInput);
    const numberString = this.#inputSeparator.getNumberString(rawInput);
    this.addCustomDelimiter(delimiter);
    this.#validator.validateCustomDelimiter(delimiter);
    this.#validator.validateNumberString(numberString, this.#delimiters);

    return this.#numberSplitter.split(this.#delimiters, numberString);
  }

  addCustomDelimiter(delimiter) {
    if (delimiter) {
      this.#delimiters.push(delimiter);
    }
  }
}
