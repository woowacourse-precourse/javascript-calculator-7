import ERROR_MESSAGES from "../constants/errorMessages.js";
import extractCustomDelimiter from "./extractCustomDelimiter.js";

const checkCustomDelimiter = (input, delimiters) => {
  if (input.startsWith("//") && input.includes("\\n")) {
    const index = input.indexOf("\\n");
    delimiters.push(...extractCustomDelimiter(input, index));

    return input.slice(index + 2);
  } else if (input.includes("//") || input.includes("\\n")) {
    throw new Error(ERROR_MESSAGES.CUSTOM_DELIMITER);
  }

  return input;
};

export default checkCustomDelimiter;
