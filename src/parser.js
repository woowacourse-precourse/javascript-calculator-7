import { ERROR_MESSAGE } from "./constants/error.js";
import {
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

  return parsedInputArray;
};
