import { ERROR_CODES, VALID_STRING_CODE } from "../constants/constants.js";

class StringValidation {
  static validate(inputValue) {
    if (inputValue === '')
      return ERROR_CODES.EMPTY_STRING;

    if ((!inputValue.startsWith('//') && (isNaN(inputValue[0])) || inputValue[0] === ' ') 
      || (isNaN(inputValue[inputValue.length - 1]) || inputValue[inputValue.length - 1] === ' '))
      return ERROR_CODES.LEADING_TRAILING_CHARACTER;

    if (inputValue.startsWith('//') && !inputValue.includes('\\n'))
      return ERROR_CODES.INVALID_CUSTOM_DELIMITER;

    if (inputValue.startsWith('//') && inputValue.substring(2, inputValue.indexOf('\\n')) === '')
      return ERROR_CODES.EMPTY_CUSTOM_DELIMITER;

    if (inputValue.startsWith('//') && inputValue.substring(2, inputValue.indexOf('\\n')).length >= 2)
      return ERROR_CODES.MULTIPLE_CUSTOM_DELIMITERS;

    if (inputValue.startsWith('//') && (!isNaN(inputValue.substring(2, inputValue.indexOf('\\n'))) 
      && inputValue.substring(2, inputValue.indexOf('\\n')) !== ' '))
      return ERROR_CODES.NUMERIC_CUSTOM_DELIMITER;

    if (inputValue.startsWith('//') && (isNaN(inputValue[inputValue.indexOf('\\n') + 2])) 
      || inputValue[inputValue.indexOf('\\n') + 2] === ' ')
      return ERROR_CODES.INVALID_CHARACTER_AFTER_CUSTOM_DELIMITER;

    let parsedValue = inputValue;
    const delimiters = [',', ':'];

    if (inputValue.startsWith('//')) {
      parsedValue = inputValue.substring(inputValue.indexOf('\\n') + 2);
      delimiters.push(inputValue.substring(2, inputValue.indexOf('\\n')));
    }

    const escapedDelimiters = delimiters.map(delimiter => delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

    const invalidCharacterRegex = new RegExp(`[^0-9${escapedDelimiters.join('')}]`);
    if (invalidCharacterRegex.test(parsedValue)) return ERROR_CODES.UNDEFINED_DELIMITER;

    const consecutiveDelimiterRegex = new RegExp(`([${escapedDelimiters.join('')}]){2,}`);
    if (consecutiveDelimiterRegex.test(parsedValue)) return ERROR_CODES.CONSECUTIVE_DELIMITERS;

    return VALID_STRING_CODE;
  }
}

export default StringValidation;