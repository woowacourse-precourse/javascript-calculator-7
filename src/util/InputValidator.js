import { ErrorMessage, Delimiter, StaticNumber } from '../domain/Constants.js';

const InputValidator = {
  validateInputString(input) {
    if (input === null || input.trim() === "") return [StaticNumber.INITIAL_SUM];

    const { delimiter, numbers } = this.parseInput(input);
    const splitNumbers = numbers.split(delimiter);

    return splitNumbers.map(num => {
      const trimmedNum = num.trim();
      
      if (trimmedNum === '') {
        throw new Error(ErrorMessage.EMPTY_NUMBER);
      }

      const parsedNum = parseInt(trimmedNum, StaticNumber.RADIX);
      
      if (isNaN(parsedNum)) {
        throw new Error(ErrorMessage.INVALID_NUMBER);
      }

      if (parsedNum < 0) {
        throw new Error(ErrorMessage.NEGATIVE_NUMBER);
      }

      return parsedNum;
    });
  },

  parseInput(input) {
    if (input.startsWith(Delimiter.CUSTOM_PREFIX)) {
      const [delimiterPart, numbersPart] = input.split(Delimiter.CUSTOM_SUFFIX);
      if (!numbersPart) {
        throw new Error(ErrorMessage.INVALID_CUSTOM_DELIMITER_FORMAT);
      }
      return {
        delimiter: delimiterPart.slice(Delimiter.CUSTOM_PREFIX.length),
        numbers: numbersPart
      };
    }
    return {
      delimiter: Delimiter.DEFAULT,
      numbers: input
    };
  }
};

export default InputValidator;