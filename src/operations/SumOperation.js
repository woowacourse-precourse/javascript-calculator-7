import IOperation from "../interfaces/IOperation.js";

class SumOperation extends IOperation {
  calculate(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
}

export default SumOperation;
