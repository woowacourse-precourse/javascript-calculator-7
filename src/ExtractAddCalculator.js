export const ExtractAddCalculator = {
  add(arr) {
    const SUM = arr.reduce(
      (accumulateValue, currentValue) => accumulateValue + currentValue,
      0
    );

    return SUM;
  },
};
