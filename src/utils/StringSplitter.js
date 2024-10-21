import ValidationError from "../validator/ValidationError.js";
import MESSAGE from "../constants/message.js";

const StringSplitter = {
  split(input) {
    const customDelimiterPattern = /^\/\/(.)\\n/;
    let delimiter = /[,|:]/;

    if (input.startsWith("//")) {
      const matches = input.match(customDelimiterPattern);
      if (!matches || matches[1] === "") {
        throw new ValidationError(MESSAGE.ERROR.INVALID_DELIMITER);
      }
      delimiter = new RegExp(matches[1]);
      input = input.split("\\n")[1];
    }

    const numbers = input.split(delimiter);
    return { numbers };
  },
};

export default StringSplitter;
