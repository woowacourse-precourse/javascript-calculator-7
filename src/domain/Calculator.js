import CalculationModel from './CalculationModel.js';

export default class Calculator {
  executeCalculation(numbers) {
    this.model = new CalculationModel(numbers);

    return Calculator.sum(this.model.getNumbers());
  }

  static sum(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
}
