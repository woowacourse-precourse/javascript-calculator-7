import {
  isCustomSeparator,
  isRegularSeparator,
} from "./utils/validateInput.js";
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

const userInputParser = (input) => {
  const parsedInput = isCustomSeparator(input)
    ? customInputParser(input)
    : isRegularSeparator(input)
    ? regularInputParser(input)
    : "INVALIDATE_FORMAT";

  parsedInputValidator(parsedInput);

  return parsedInput;
};

export default userInputParser;
