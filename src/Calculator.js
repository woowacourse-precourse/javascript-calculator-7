import { VALIDATION_CUSTOM, VALIDATION_DEFAULT } from './constants.js';

export default class Calculator {
  constructor(input, type) {
    this.input = input;
    this.type = type;
    this.defaultSep = new RegExp(/[,:]/);
    this.customSep = input[2] !== '\\' ? new RegExp(`[,:${input[2]}]`) : new RegExp(/[,:\\]/);
    this.numArr = [];
  }

  calculate() {
    if (this.type === VALIDATION_DEFAULT) {
      this.numArr = this.convertToNumberArray(this.defaultSep);
      return this.calculateSum();
    } else if (this.type === VALIDATION_CUSTOM) {
      if (this.input[2] !== '\\') {
        this.numArr = this.convertToNumberArray(this.customSep);
        return this.calculateSum();
      } else {
        this.numArr = this.convertToNumberArray(this.customSep);
        return this.calculateSum();
      }
    }
  }

  convertToNumberArray(sep) {
    if (this.type === VALIDATION_DEFAULT) {
      return this.input.split(sep).map(Number);
    } else if (this.type === VALIDATION_CUSTOM) {
      return this.input.slice(5).split(sep).map(Number);
    }
  }

  calculateSum() {
    let sum = 0;
    this.numArr.forEach((num) => {
      sum += num;
    });
    return sum;
  }
}