import CalculationModel from './CalculationModel.js';

export default class Calculator {
  executeCalculation(numbers) {
    const calculationModel = new CalculationModel(numbers);
    return this.sum(calculationModel.getNumbers());
  }

  sum(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
}