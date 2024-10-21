const DEFAULT_MIN_LENGTH = 2;
const DEFAULT_MAX_LENGTH = 3;

export const createDelimiterCombinationList = (
  delimiters,
  minLength = DEFAULT_MIN_LENGTH,
  maxLength = DEFAULT_MAX_LENGTH
) => {
  const backtrack = (combination, start) => {
    if (combination.length === maxLength) {
      return;
    }

    if (combination.length > minLength) {
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
