import { ERROR_MESSAGE } from "./error.js";
import {
  isDuplicateCustomSeparator,
  isEmpty,
  isNegativeNumber,
  isNotNumber,
} from "./utils/validateInput.js";

const userInputValidator = (input) => {
  switch (true) {
    case isEmpty(input):
      return 0;
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
    case isNotNumber(input):
      throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    case isNegativeNumber(input):
      throw new Error(ERROR_MESSAGE.NEGATIVE_NUMBER);
  }
};

export { userInputValidator, customInputValidator, parsedInputValidator };
