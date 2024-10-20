import {validateInput, validateNumbers} from "../utils/Validator.js";
import {add} from "../utils/add.js";
import {extractCustomDelimiter, splitByCustomDelimiter, splitByDefaultDelimiters} from "../utils/DelimiterHandler.js";

export class Calculator {
    calculate(input){
        validateInput(input);

        let numbers;
        const customDelimiterData = extractCustomDelimiter(input);
        if(customDelimiterData){
            numbers = splitByCustomDelimiter(customDelimiterData.numbers, customDelimiterData.delimiter);
        }
        else{
            numbers = splitByDefaultDelimiters(input);
        }

        validateNumbers(numbers);
        return add(numbers);
    }
}
