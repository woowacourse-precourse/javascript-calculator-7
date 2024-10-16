export const ExtractAddCalculator = {
  add(arr) {
    const SUM = arr.reduce(
      (accumulateValue, currentValue) => accumulateValue + currentValue,
      0
    );

    return SUM;
  },

  extract(userInput) {
    const EXTRACTED_ARR = userInput.split(/[^\d]+/).map(Number);

    return EXTRACTED_ARR;
  },
};
