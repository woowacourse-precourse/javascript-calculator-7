import { ErrorMessage, Delimiter } from '../domain/Constants.js';

const StringParser = {
    hasCustomDelimiter(inputString) {
        return inputString.startsWith(Delimiter.CUSTOM_PREFIX) && inputString.includes(Delimiter.CUSTOM_SUFFIX);
    },

    getCustomDelimiters(inputString, delimiters) {
        const customDelimiter = inputString[Delimiter.CUSTOM_PREFIX.length];
        return [...delimiters, customDelimiter];
    },

    stripCustomDelimiterPart(inputString) {
        return inputString.substring(inputString.indexOf(Delimiter.CUSTOM_SUFFIX) + Delimiter.CUSTOM_SUFFIX.length);
    },

    validateString(inputString, delimiters) {
        for (const char of inputString) {
            if (char === ' ') {
                throw new Error(ErrorMessage.WHITESPACE);
            }
            if (isNaN(char) && !delimiters.includes(char)) {
                throw new Error(ErrorMessage.INVALID_CHARACTER);
            }
        }
    },

    splitByDelimiters(inputString, delimiters) {
        let currentToken = '';
        const tokens = [];

        for (const char of inputString) {
            if (delimiters.includes(char)) {
                if (currentToken !== '') {
                    tokens.push(currentToken);
                    currentToken = '';
                }
            } else {
                currentToken += char;
            }
        }

        if (currentToken !== '') {
            tokens.push(currentToken);
        }

        return tokens;
    }
};

export default StringParser;