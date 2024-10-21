import {validateInput, validateNumbers} from "../utils/Validator.js";
import {add} from "../utils/add.js";
import {extractCustomDelimiter, splitByCustomDelimiter, splitByDefaultDelimiter} from "../utils/DelimiterHandler.js";

export class Calculator {
    calculate(input) {
        validateInput(input);

        input = input.replace(/\\n/g, '\n');
        let numbers;
        const customDelimiterData = extractCustomDelimiter(input);
        if (customDelimiterData) {
            numbers = splitByCustomDelimiter(customDelimiterData.numbers, customDelimiterData.delimiter);
        } else {
            numbers = splitByDefaultDelimiter(input);
        }

        validateNumbers(numbers);
        return add(numbers);
    }
}
