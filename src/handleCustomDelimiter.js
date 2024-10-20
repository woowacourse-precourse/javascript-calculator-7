import { CUSTOM_DELIMITER_INPUT } from './constants/Delimeters.js';

const getNumbersString = (string) => {
  const startIndex = string.lastIndexOf(CUSTOM_DELIMITER_INPUT.start);
  const endIndex = string.lastIndexOf(CUSTOM_DELIMITER_INPUT.end);
  const numbersString = string.slice(endIndex + CUSTOM_DELIMITER_INPUT.end.length);
  const customDelimiterInput = string.slice(
    startIndex,
    endIndex + CUSTOM_DELIMITER_INPUT.end.length,
  );
  return { numbersString, customDelimiterInput };
};

const exportDelimiter = (customDelimiterInput) => {
  const customDelimiter = customDelimiterInput
    .split(CUSTOM_DELIMITER_INPUT.start)
    .flatMap((el) => el.split(CUSTOM_DELIMITER_INPUT.end))
    .filter((el) => el)
    .join('');
  return customDelimiter;
};

const seperateCustomDelimiter = (string) => {
  const startIndex = string.lastIndexOf(CUSTOM_DELIMITER_INPUT.start);
  if (startIndex !== 0) return { customDelimiter: '', numbersString: string };
  const { numbersString, customDelimiterInput } = getNumbersString(string);
  const customDelimiter = exportDelimiter(customDelimiterInput);
  return { customDelimiter, numbersString };
};

export default seperateCustomDelimiter;
