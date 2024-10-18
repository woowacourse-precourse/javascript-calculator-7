export function parseDefaultDelimiters(userInput) {
  const defaultDelimiterPattern = /[,:]/g;
  const delimiterSeparatedArray = userInput.split(defaultDelimiterPattern);

  return delimiterSeparatedArray;
}
