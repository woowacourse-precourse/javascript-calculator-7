class PositiveCalculator {
  constructor(userInputNumbers) {
    this.userInputNumbers = [...userInputNumbers];
  }

  sum() {
    return this.userInputNumbers.reduce((sum, number) => sum + number, 0);
  }

  isPositive() {
    return this.userInputNumbers.every((number) => number > 0);
  }
}

export default PositiveCalculator;
