import checkCustomDelimiter from "./CheckCustomDelimiter";

const cuttingInput = (input, customDelimiter) => {
  const PROCESSED_INPUT = customDelimiter
    ? input.slice(input.indexOf("\\n") + 2)
    : input;

  const DELIMITER_REGEX = new RegExp(`[,:${CUSTOM_DELIMITER}]`);

  return PROCESSED_INPUT.split(DELIMITER_REGEX).map(Number);
};

export default cuttingInput;
