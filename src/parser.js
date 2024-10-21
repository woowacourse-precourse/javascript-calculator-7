import { isCustomSeparator } from "./utils/validateInput.js";

const customInputParser = (input) => {
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
