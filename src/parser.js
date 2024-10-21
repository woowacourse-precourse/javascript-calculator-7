import { ERROR_MESSAGE } from "./error.js";
import {
  isNegativeNumber,
  isNotNumber,
  isCustomSeparator,
  isDuplicateCustomSeparator,
} from "./utils/validateInput.js";

const customInputParser = (input) => {
  if (isDuplicateCustomSeparator(input)) {
    throw new Error(ERROR_MESSAGE.DUPLICATE_CUSTOM_SEPARATOR);
  }
  const [separatorLine, contentLine] = input.split("\\n");
  const customSeparator = separatorLine.substring(2);

  return contentLine.split(customSeparator);
};

const regularInputParser = (input) => {
  return input.split(/[,:]/g);
};

export const userInputParser = (input) => {
  const parsedInputArray = isCustomSeparator(input)
    ? customInputParser(input)
    : regularInputParser(input);

  if (isNotNumber(parsedInputArray)) {
    throw new Error(ERROR_MESSAGE.NOT_NUMBER);
  } else if (isNegativeNumber(parsedInputArray)) {
    throw new Error(ERROR_MESSAGE.NEGATIVE_NUMBER);
  }

  return parsedInput;
};
