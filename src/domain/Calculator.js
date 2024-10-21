import StringSplitter from "../utils/StringSplitter.js";
import Validator from "../validator/Validator.js";

class Calculator {
  calculate(input) {
    if (!input) {
      return 0;
    }

    const { numbers } = StringSplitter.split(input);
    Validator.validateNumbers(numbers);

    const sum = numbers.reduce((acc, num) => acc + parseInt(num, 10), 0);
    return sum;
  }
}

export default Calculator;
