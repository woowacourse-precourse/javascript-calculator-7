export class Calculator {
  calculate(operatorList, expression) {
    const op = this.#makeRegularExpression(operatorList);
    return expression.split(op);
  }

  #makeRegularExpression(operatorList) {
    const escapedOperators = operatorList.map(operator => `\\${operator}`).join('|');
    return new RegExp(`[${escapedOperators}]`);
  }
}