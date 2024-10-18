import findCustomSeparator from "./findCustomSeparator.js";

const extractNumbersFromInput = (input) => {
  input = input.replace("\\n", "\n");
  const customSeparator = findCustomSeparator(input);
  let delimiter = /[,:]+/;

  if (customSeparator) {
    input = input.substring(4);
    delimiter = new RegExp(`[${customSeparator},:]+`);
  }

  const numbers = input.split(delimiter);

  return numbers;
};

export default extractNumbersFromInput;
