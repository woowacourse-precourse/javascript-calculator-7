export class Calculator {
  static extractNumber(string) {
    const extractdArr = string.split(/[^\d]+/).map(Number);

    return extractdArr;
  }

  static add(arr) {
    return arr.reduce(
      (accumulateValue, currentValue) => accumulateValue + currentValue,
      0
    );
  }
}
