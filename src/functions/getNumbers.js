import isVaildateNumber from '../utils/isVaildateNumber.js';
import MESSAGES from '../assets/message.js';

const createEscapedDelimiter = function createEscapedDelimiterFunc(delimiters) {
  const escapedDelimiters = delimiters
    .map(d => d.replace(/[/.?*+|^\\\-="'"]/g, '\\$&'))
    .join('');

  return escapedDelimiters;
};

const isValidateInput = function validateInputFunc(input, escapedDelimiters) {
  const validInputRegex = new RegExp(`^[0-9${escapedDelimiters}]+$`);

  if (!validInputRegex.test(input)) {
    throw new Error(MESSAGES.ERROR.INVALID_INPUT);
  }
};

const splitInput = function splitInputByDelimiters(input, escapedDelimiters) {
  const delimiterRegex = new RegExp(`[${escapedDelimiters}]`);

  const splitResult = input.split(delimiterRegex).filter(item => item !== '');

  return splitResult;
};

const convertNumbers = function convertNumbersFunc(splitString) {
  const numbers = splitString.map(string => parseInt(string, 10));

  return numbers;
};

const isVaildateNumbers = function isVaildateNumbersFunc(numbers) {
  numbers.forEach(num => {
    isVaildateNumber(num);
  });
};

const getNumbers = function saveNumbersFromStringFunc(input, delimiters) {
  const escapedDelimiters = createEscapedDelimiter(delimiters);
  isValidateInput(input, escapedDelimiters);

  const splitString = splitInput(input, escapedDelimiters);
  const numbers = convertNumbers(splitString);
  isVaildateNumbers(numbers);

  return numbers;
};

export default getNumbers;
