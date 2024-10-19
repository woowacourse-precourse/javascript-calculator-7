const cuttingInput = (input, customDelimiter) => {
  const PROCESSED_INPUT = customDelimiter
    ? String(input.slice(input.indexOf("\\n") + 2))
    : String(input);

  const DELIMITER_REGEX = new RegExp(`[,:${customDelimiter}]`);

  return PROCESSED_INPUT.split(DELIMITER_REGEX).map(Number);
};

export default cuttingInput;
