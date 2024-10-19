export const generateDelimiterCombinations = (
  delimiters,
  minLength = 2,
  maxLength = 3
) => {
  const backtrack = (combination, start) => {
    if (combination.length === maxLength) {
      return;
    }

    if (combination.length >= minLength) {
      result.push(combination.join(""));
    }

    delimiters.forEach((delimiter, index) => {
      backtrack([...combination, delimiter], index);
    });
  };

  const result = [];

  backtrack([], -1);

  return result;
};
