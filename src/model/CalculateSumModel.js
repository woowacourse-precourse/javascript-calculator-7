class CalculateSumModel {
  constructor() {}
  calculateSum(splitArray) {
    const numberArray = splitArray.map((i) => Number(i));
    const total = numberArray.reduce((a, b) => a + b);
    console.log(`total: ${total}`);
    return total;
  }
}

export default CalculateSumModel;
