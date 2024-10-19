import Errors from "../constants/Errors";

const checkCustomDelimiter = (input) => {
  if (input.startsWith("//")) {
    if (input.includes("\\n")) {
      const CUSTOM_DELIMITER = input.slice(2, input.indexOf("\\n"));
      return CUSTOM_DELIMITER;
    }
    throw new Error(Errors.WRONG_CUSTOM_DELIMITER);
  }

  return false;
};

export default checkCustomDelimiter;
