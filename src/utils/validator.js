import { utils } from './utils.js';
import { ERROR_MESSAGES } from '../constants/messages.js';

export const validCarName = (splittedNames) => {
  splittedNames.forEach((car) => {
    if (!utils.hasValidCharacter(car)) {
      throw new Error(ERROR_MESSAGES.CAR_NAME_DELIMITER_REQUIRED);
    }
    if (!utils.isNameLengthLimit(car)) {
      throw new Error(ERROR_MESSAGES.CAR_NAME_LENGTH_EXCEEDED);
    }
    if (utils.hasWhitespace(car)) {
      throw new Error(ERROR_MESSAGES.CAR_NAME_CONTAINS_WHITESPACE);
    }
  });
};
