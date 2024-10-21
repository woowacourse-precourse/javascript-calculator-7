import {
  isDuplicateCustomSeparator,
  isNegativeNumber,
  isNotNumber,
  isOnlyStringOrNumber,
} from "./utils/validateInput.js";
import { ERROR_MESSAGE } from "./constants/error.js";

const userInputValidator = (input) => {
  switch (true) {
    case isOnlyStringOrNumber(input):
      throw new Error(ERROR_MESSAGE.NO_SEPARATOR);
    default:
      return;
  }
};

const customInputValidator = (input) => {
  switch (true) {
    case isDuplicateCustomSeparator(input):
      throw new Error(ERROR_MESSAGE.DUPLICATE_CUSTOM_SEPARATOR);
    default:
      return;
  }
};

const parsedInputValidator = (input) => {
  switch (true) {
    case input === "INVALIDATE_FORMAT":
      throw new Error(ERROR_MESSAGE.INVALIDATE_FORMAT);
    case isNotNumber(input):
      throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    case isNegativeNumber(input):
      throw new Error(ERROR_MESSAGE.NEGATIVE_NUMBER);
    default:
      return;
  }
};

export { userInputValidator, customInputValidator, parsedInputValidator };
