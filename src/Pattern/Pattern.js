import { escapeRegExp } from '../util/escapeRegExp.js';

export class Pattern {
  constructor(string) {
    this.string = string;
  }

  makeOrPattern() {
    return escapeRegExp(this.string).split('').join('|');
  }
}
