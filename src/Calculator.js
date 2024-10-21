import {
  DEFAULT_SEPARATORS,
  CUSTOM_DESIGNATORS,
  CUSTOM_SEPARATOR_REGEX,
  ERROR_CASE,
  ERROR_MESSAGE,
  INVALID_CUSTOM_SEPARATOR_REGEX,
  DESCRIPTION,
} from './constants.js';

class Calculator {
  #inputText;
  #customSeparator;
  #numbers;
  #result;
  #userDescription;

  constructor(input) {
    this.#inputText = input;
    this.#result = 0;
  }

  #validate(target, type) {
    switch (type) {
      case ERROR_CASE.customPosition:
        if (CUSTOM_SEPARATOR_REGEX.test(target)) throw new Error(ERROR_MESSAGE.customPosition);
        break;
      case ERROR_CASE.invalidCustom:
        if (INVALID_CUSTOM_SEPARATOR_REGEX.test(target)) throw new Error(ERROR_MESSAGE.invalidCustom);
        break;
      case ERROR_CASE.duplicatedCustom:
        if (CUSTOM_SEPARATOR_REGEX.test(target)) throw new Error(ERROR_MESSAGE.duplicatedCustom);
        break;
      case ERROR_CASE.positiveNum:
        if (target.length) throw new Error(ERROR_MESSAGE.positiveNum);
        break;
      case ERROR_CASE.invalidFormat:
        if (target.length) throw new Error(ERROR_MESSAGE.invalidFormat);
        break;
    }
  }

  #findCustomSeparator() {
    if (!this.#inputText.startsWith(CUSTOM_DESIGNATORS.start)) {
      this.#validate(this.#inputText, ERROR_CASE.customPosition);
      return (this.#customSeparator = '');
    }

    const customSeparator = this.#inputText.match(CUSTOM_SEPARATOR_REGEX)[0];

    this.#validate(customSeparator, ERROR_CASE.invalidCustom);

    return customSeparator;
  }

  #splitTextToNumber() {
    this.#customSeparator = this.#findCustomSeparator();
    const separatorsRegex = new RegExp(
      `${DEFAULT_SEPARATORS.join('|')}${this.#customSeparator && '|\\' + this.#customSeparator}`,
      'g'
    );

    const splitTarget = this.#customSeparator
      ? this.#inputText.slice(this.#inputText.indexOf(CUSTOM_DESIGNATORS.end) + 2)
      : this.#inputText;

    this.#validate(splitTarget, ERROR_CASE.duplicatedCustom);

    this.#numbers = splitTarget.split(separatorsRegex).map((char) => (char.length ? Number(char) : ''));
  }

  #calculateSum() {
    const nonPositiveNumbers = this.#numbers.filter((number) => typeof number !== 'string' && Math.sign(number) < 1);
    const invalidFormats = this.#numbers.filter((number) => typeof number !== 'number' || Number.isNaN(number));
    this.#validate(nonPositiveNumbers, ERROR_CASE.positiveNum);
    this.#validate(invalidFormats, ERROR_CASE.invalidFormat);

    return this.#numbers.reduce((acc, cur) => acc + cur, 0);
  }

  #setDescription() {
    if (DEFAULT_SEPARATORS.includes(this.#customSeparator)) this.#userDescription = DESCRIPTION;
  }

  calculateStringSum() {
    if (!this.#inputText.length) return;

    this.#splitTextToNumber();
    this.#result = this.#calculateSum();
    this.#setDescription();
  }

  get result() {
    return this.#result;
  }

  get userDescription() {
    return this.#userDescription;
  }
}

export default Calculator;
