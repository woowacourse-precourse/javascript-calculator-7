export class Calculator {
  static extractNumber(string) {
    const EXTRACTED_ARR = string.split(/[^\d]+/).map(Number);

    return EXTRACTED_ARR;
  }

  static add(arr) {
    return arr.reduce(
      (accumulateValue, currentValue) => accumulateValue + currentValue,
      0
    );
  }
}
