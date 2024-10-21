import { isCustomSeparator } from "./utils/validateInput.js";
import { customInputValidator, parsedInputValidator } from "./validator.js";

const customInputParser = (input) => {
  customInputValidator(input);
  const [separatorLine, contentLine] = input.split("\\n");
  const customSeparator = separatorLine.substring(2);

  return contentLine.split(customSeparator);
};

const regularInputParser = (input) => {
  return input.split(/[,:]/g);
};

export const userInputParser = (input) => {
  const parsedInput = isCustomSeparator(input)
    ? customInputParser(input)
    : regularInputParser(input);

  parsedInputValidator(parsedInput);

  return parsedInput;
};
