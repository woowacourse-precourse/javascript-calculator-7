import { CUSTOM_DELIMITER_INPUT } from "./constants/Delimeters.js";
import validator from "./utils/validator.js";

export const seperateCustomDelimiter = (string) => {
  validator.validateString(string);
  const startIndex = string.lastIndexOf(CUSTOM_DELIMITER_INPUT.start);
  const endIndex = string.lastIndexOf(CUSTOM_DELIMITER_INPUT.end);
  if (startIndex !== 0 && endIndex !== 3) return { customDelimiter: [], numbersString: string };
  const numbersString = string.slice(endIndex + CUSTOM_DELIMITER_INPUT.end.length);
  const customDelimiterInput = string.slice(
    startIndex,
    endIndex + CUSTOM_DELIMITER_INPUT.end.length
  );
  const customDelimiter = exportDelimiter(customDelimiterInput);
  validator.validateCustomDelimiter(customDelimiter);
  return { customDelimiter, numbersString };
};

export const exportDelimiter = (customDelimiterInput) => {
  return customDelimiterInput
    .split(CUSTOM_DELIMITER_INPUT.start)
    .flatMap((el) => el.split(CUSTOM_DELIMITER_INPUT.end))
    .filter((el) => el)
    .join("");
};
