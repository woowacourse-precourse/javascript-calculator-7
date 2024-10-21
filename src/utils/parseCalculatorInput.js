const CUSTOM_DELIMITER_START = '//';
const CUSTOM_DELIMITER_END = '\\n';

function hasCustomDelimiter(str) {
  return (
    str.startsWith(CUSTOM_DELIMITER_START) && str.includes(CUSTOM_DELIMITER_END)
  );
}

export function parseCalculatorInput(str) {
  const delimiter = hasCustomDelimiter(str)
    ? str.split(CUSTOM_DELIMITER_END)[0].split(CUSTOM_DELIMITER_START)[1]
    : undefined;

  const values = hasCustomDelimiter(str)
    ? str.split(CUSTOM_DELIMITER_END)[1]
    : str;

  return [delimiter, values];
}
