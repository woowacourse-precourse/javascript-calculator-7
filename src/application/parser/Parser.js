import Validator from '../../validation/Validator.js';
import { DEFAULT_DELIMITERS } from '../../constant/DELIMITER.js';
import NumberSplitter from './NumberSplitter.js';
import InputSeparator from './InputSeparator.js';

export default class Parser {
  #delimiters;
  #inputSeparator;
  #numberSplitter;
  #validator;

  constructor() {
    this.#delimiters = Object.values(DEFAULT_DELIMITERS);
    this.#inputSeparator = new InputSeparator();
    this.#numberSplitter = new NumberSplitter();
    this.#validator = new Validator();
  }

  parse(rawInput){
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
