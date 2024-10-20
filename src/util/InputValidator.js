import { Delimiter, StaticNumber } from '../domain/Constants.js';
import StringParser from './StringParser.js';
import NumberParser from './NumberParser.js';

const InputValidator = {
  validateInputString(inputString) {
    if (!inputString || inputString.trim() === '') {
      return [StaticNumber.INITIAL_SUM];
    }

    let delimiters = [...Delimiter.DEFAULT];
    let newInputString = inputString;

    if (StringParser.hasCustomDelimiter(inputString)) {
      delimiters = StringParser.getCustomDelimiters(inputString, delimiters);
      newInputString = StringParser.stripCustomDelimiterPart(inputString);
    }

    StringParser.validateString(newInputString, delimiters);
    const stringArray = StringParser.splitByDelimiters(newInputString, delimiters);
    return NumberParser.parseNumbers(stringArray);
  }
};

export default InputValidator;