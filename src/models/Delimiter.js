import DelimiterError from '../errors/DelimiterError.js';
import { ERROR_MESSAGE } from '../constants/errorMessages.js';

class Delimiter {

    #delimiter;
    #operationText;

    constructor(delimiter, operationText) {
        this.#delimiter = delimiter;
        this.#operationText = operationText;
        this.validate();
    }

    static getDelimiter(inputText) {
        if(inputText === '') {
            validateEmptyString(inputText);
        }

        if(inputText.includes('//')) {
            return this.customDelimiter(inputText);
        }
        
        return this.defaultDelimiter(inputText);
    }

    static defaultDelimiter(inputText) {
        const delimiterInstantce = new Delimiter(/[, :]/, inputText);
        return {
            delimiter: delimiterInstantce.#delimiter,
            operationText: delimiterInstantce.#operationText
        }
    }

    static customDelimiter(inputText) {
        const delimiter = inputText.slice(2).split("\\n")[0];
        const operationText = inputText.split("\\n")[1];
        const delimiterInstantce = new Delimiter(delimiter, operationText);
        return {
            delimiter: delimiterInstantce.#delimiter, 
            operationText: delimiterInstantce.#operationText
        }
    }

    validate() {
        const numbers = this.#operationText.split(this.#delimiter);
        this.validateInconsistentDelimiters();
        this.validateNonNumer(numbers);
        this.validateNegativeNumbers(numbers);
        this.validateBetweenEmptyNumbers(numbers);
    }

    validateEmptyString() {
        throw new DelimiterError(ERROR_MESSAGE.input_blank_error);
    }

    validateInconsistentDelimiters() {   
        const delimitersInData = new Set(this.#operationText.match(/[;,\s]/g));
        if (delimitersInData.has(this.#delimiter) && delimitersInData.size > 1) {
            throw new DelimiterError(ERROR_MESSAGE.input_validate_consistent);
        }
    }

    validateNonNumer(numbers) {
        for (const number of numbers) {
            if (Number.isNaN(Number(number))) {
                throw new DelimiterError(ERROR_MESSAGE.input_non_numbers);
            }
        }
    }

    validateNegativeNumbers(numbers) {
        for (const number of numbers) {
            if (Number(number) < 0) {
                throw new DelimiterError(ERROR_MESSAGE.input_negative_numbers);
            }
        }
    }

    validateBetweenEmptyNumbers(numbers) {
        for (const number of numbers) {
            if(number.trim() === '') {
                throw new DelimiterError(ERROR_MESSAGE.input_between_empty_numbers);
            }
        }
    }

}

export default Delimiter;