export class Calculator {
  #string;

  constructor(userInput) {
    this.#string = userInput;
  }

  extract() {
    const EXTRACTED_ARR = this.#string.split(/[^\d]+/).map(Number);

    return EXTRACTED_ARR;
  }

  add() {
    const EXTRACTED_ARR = this.extract();
    const SUM = EXTRACTED_ARR.reduce(
      (accumulateValue, currentValue) => accumulateValue + currentValue,
      0
    );

    return SUM;
  }
}
