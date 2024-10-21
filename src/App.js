import { Console } from '@woowacourse/mission-utils';
import { CALCULATER, ERROR_MESSAGES } from './constants/Message.js';
import { SYMBOL } from './constants/Symbol.js';
import calculate from './Calculator.js';
import validator from './Validator.js';

class App {
  async run() {
    const userInputValue = await Console.readLineAsync(CALCULATER.input_prompt);

    if (userInputValue.trim() === SYMBOL.empty) {
      Console.print(CALCULATER.empty_result);
      return;
    }

    const defaultDelimiter = SYMBOL.default_delimiter;
    let separatedValue;

    if (userInputValue.startsWith(SYMBOL.custom_delimiter_prefix)) {
      const formattedInput = userInputValue.replace(
        SYMBOL.escaped_newline_pattern,
        SYMBOL.formatted_newline,
      );
      const delimiterBoundary = formattedInput.indexOf(
        SYMBOL.custom_delimiter_surffix,
      );

      if (delimiterBoundary === SYMBOL.no_delimiter_position) {
        throw new Error(ERROR_MESSAGES.invalid_custom_delimiter);
      }

      const extractedDelimiter = formattedInput
        .substring(SYMBOL.delimiter_start_index, delimiterBoundary)
        .trim();

      if (!extractedDelimiter) {
        throw new Error(ERROR_MESSAGES.empty_custom_delimiter);
      }

      if (extractedDelimiter.length !== SYMBOL.max_custom_delimiter_length) {
        throw new Error(ERROR_MESSAGES.invalid_custom_delimiter_length);
      }

      const escapedDelimiter = extractedDelimiter.replace(
        SYMBOL.special_char_escape_pattern,
        SYMBOL.special_char_escape_replacement,
      );
      const remainingValue = formattedInput.substring(
        delimiterBoundary + SYMBOL.newline_offset,
      );

      const customDelimiter = new RegExp(`[${escapedDelimiter}]`);
      separatedValue = remainingValue.split(customDelimiter);
    } else {
      separatedValue = userInputValue.split(defaultDelimiter);
    }

    validator(separatedValue);

    const convertedNumbers = separatedValue.map(Number);

    const calculatedResult = calculate(convertedNumbers);

    Console.print(CALCULATER.result(calculatedResult));
  }
}

export default App;
