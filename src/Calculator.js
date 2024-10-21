import { INPUT_ERROR_MESSAGE } from "./constants/Messages.js";

export class Calculator {
  calculate(operatorList, expression) {
    const regExp = this.#makeRegularExpression(operatorList);
    const splitNumbers = this.#splitExpression(expression, regExp)
    splitNumbers.some((number) => this.#validateNumber(number));
    return splitNumbers.reduce((a, c) => Number(a) + Number(c));
  }

  #splitExpression(expression, regExp) {
    return expression.split(regExp);
  }

  #makeRegularExpression(operatorList) {
    const escapedOperators = operatorList.map(operator => `\\${operator}`).join('|');
    return new RegExp(`[${escapedOperators}]`);
  }

  #validateNumber(num) {
    const number = Number(num);
    this.#validatePositiveNumber(number);
    this.#validateIsNaN(number);
  }

  #validatePositiveNumber(number) {
    if (number <= 0) throw new Error(INPUT_ERROR_MESSAGE);
  }

  #validateIsNaN(number) {
    if (isNaN(number)) throw new Error(INPUT_ERROR_MESSAGE);
  }
}