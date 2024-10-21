import Validator from "./validator.js";

class Calculator {
  add(userInput) {
    const VALIDATOR = new Validator(userInput);
    const VALIDATED_NUMBERS = VALIDATOR.parseInput();

    return VALIDATED_NUMBERS.reduce((acc, num) => acc + num, 0);
  }
}

export default Calculator;
