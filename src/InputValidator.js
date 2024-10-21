import { DEFAULT_SEPARATOR, ERROR_MESSAGE, VALIDATION_CUSTOM, VALIDATION_DEFAULT } from './constants.js';

export default class InputValidator {
    constructor(input) {
        this.input = input;
    }

    validateInput() {
        if (this.isDefault()) {
            return VALIDATION_DEFAULT;
        } else if (this.isCustom()) {
            return VALIDATION_CUSTOM;
        }

        throw new Error(ERROR_MESSAGE);
    }

    isDefault() {
        const invalidInput = /[^0-9,:.]/;

        if (!invalidInput.test(this.input)) {
            this.validateDefaultFormat();
            return true;
        }
        return false;
    }

    isCustom() {
        const customSep = /^\/\/\D\\n/;

        if (customSep.test(this.input)) {
            this.validateCustomFormat();

            if (this.input[2] !== '\\') {
                const pattern = new RegExp(`[^0-9,:.${this.input[2]}]`);
                if (pattern.test(this.input.slice(5)) || this.hasConsecutiveSeparators(this.input.slice(5), this.input[2])) {
                    throw new Error(ERROR_MESSAGE);
                }
            } else {
                const pattern = new RegExp(/[^0-9,:.\\]/);
                if (pattern.test(this.input.slice(5)) || this.hasConsecutiveSeparators(this.input.slice(5), '\\\\')) {
                    throw new Error(ERROR_MESSAGE);
                }
            }
            return true;
        }
        return false;
    }

    validateDefaultFormat() {
        if (this.input.length === 0) {
            return;
        }

        this.startsAndEndsWithNumber(this.input);
        this.hasConsecutiveSeparators(this.input, DEFAULT_SEPARATOR);
        this.hasConsecutiveDecimalPoints(this.input);
    }

    validateCustomFormat() {
        if (this.input.length === 5) {
            return;
        }

        this.startsAndEndsWithNumber(this.input.slice(5));
        this.hasConsecutiveSeparators(this.input.slice(5), DEFAULT_SEPARATOR);
        this.hasConsecutiveDecimalPoints(this.input.slice(5));
        this.isCustomSeparatorDot();
    }

    startsAndEndsWithNumber(input) {
        if (isNaN(input[0]) || isNaN(input[input.length - 1])) {
            throw new Error(ERROR_MESSAGE);
        }
    }

    hasConsecutiveSeparators(input, sep) {
        const pattern = new RegExp(`[${sep}]{2,}`);
        if (pattern.test(input)) {
            throw new Error(ERROR_MESSAGE);
        }
    }

    hasConsecutiveDecimalPoints(input) {
        const pattern = new RegExp(/[.]{2,}/);
        if (pattern.test(input)) {
            throw new Error(ERROR_MESSAGE);
        }
    }

    isCustomSeparatorDot() {
        if (this.input[2] === '.') {
            throw new Error(ERROR_MESSAGE);
        }
    }
}