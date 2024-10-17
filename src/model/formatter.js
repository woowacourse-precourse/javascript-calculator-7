import { splitByColonAndComma } from "./colon_comma.js";
import {
  getDelimiter,
  getInputExecptDelimiter,
  isHaveCustomDelimiter,
  splitByDelimiter,
} from "./custom_delimeter.js";

const formatByCustomDelimeter = (input) => {
  const delimiter = getDelimiter(input);
  const inputExecptDelimiter = getInputExecptDelimiter(input);
  const formattedInput = splitByDelimiter(inputExecptDelimiter, delimiter);
  return formattedInput;
};

const formatByColonAndComma = (input) => {
  const formattedInput = splitByColonAndComma(input);
  return formattedInput;
};

export const formatInput = (input) => {
  const formattedInput = isHaveCustomDelimiter(input)
    ? formatByCustomDelimeter(input)
    : formatByColonAndComma(input);

  return formattedInput;
};
