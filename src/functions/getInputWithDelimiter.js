import getCustomDelimiter from './getCustomDelimiter.js';

const getInputWithDelimiter = function getInputWithDelimiterFunc(
  input,
  delimiter,
) {
  const customDelimiter = getCustomDelimiter(input);
  const processedInput = customDelimiter ? input.split('\\n')[1] : input;
  if (customDelimiter) delimiter.setCustomDelimiter(customDelimiter);

  return processedInput;
};

export default getInputWithDelimiter;
