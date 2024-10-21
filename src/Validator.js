import { ERROR_MESSAGES, DELIMITER_CONSTANTS } from "./constants.js";

export class Validator {
    // 계산식 전체 예외 처리
    static validateInput = (input) => {
        // null 또는 undefined인 경우
        if (input == null) {
            throw new Error(ERROR_MESSAGES.UNDEFINED_EXPRESSION);
        }

        return input;
    }

    // 올바르게 선언된 구분자 예외 처리
    static validateCorrectlyDeclaredDelimiters = (userInput) => {
        if ('0' <= userInput[2] && '9' >= userInput[2]) {
            throw new Error(ERROR_MESSAGES.CUSTOM_DELIMITER_CANNOT_BE_NUMBER);
        }
    }

    // 잘못 선언된 구분자 예외 처리
    static validateIncorrectlyDeclaredDelimiters = (userInput) => {
        if (userInput.includes(DELIMITER_CONSTANTS.CUSTOM_DELIMITER_START) && userInput.includes(DELIMITER_CONSTANTS.CUSTOM_DELIMITER_END)) {
            const startDelimiter = userInput.indexOf(DELIMITER_CONSTANTS.CUSTOM_DELIMITER_START);
            const endDelimiter = userInput.indexOf(DELIMITER_CONSTANTS.CUSTOM_DELIMITER_END);

            if (startDelimiter === 0) {
                throw new Error(ERROR_MESSAGES.CUSTOM_DELIMITER_MUST_BE_ONE_CHARACTER);
            }

            if (endDelimiter - startDelimiter !== 3) {
                throw new Error(ERROR_MESSAGES.CUSTOM_DELIMITER_MUST_BE_DEFINED_AT_THE_BEGINNING_AND_ONE_CHARACTER);
            }

            throw new Error(ERROR_MESSAGES.CUSTOM_DELIMITER_MUST_BE_DEFINED_AT_THE_BEGINNING);
        }

        else if (!userInput.includes(DELIMITER_CONSTANTS.CUSTOM_DELIMITER_START) && userInput.includes(DELIMITER_CONSTANTS.CUSTOM_DELIMITER_END)) {
            throw new Error(ERROR_MESSAGES.ERROR_MISSING_CUSTOM_DELIMITER_START);
        }

        else if (!userInput.includes(DELIMITER_CONSTANTS.CUSTOM_DELIMITER_END) && userInput.includes(DELIMITER_CONSTANTS.CUSTOM_DELIMITER_START)) {
            throw new Error(ERROR_MESSAGES.ERROR_MISSING_CUSTOM_DELIMITER_END);
        }
    }

    // 숫자 예외 처리
    static validateNumbers = (splitedString) => {
        const numbers = splitedString.map((value) => {
            const num = Number(value);

            if (isNaN(num)) {
                throw new Error(ERROR_MESSAGES.NON_NUMBERIC_VALUE);
            }

            return num;
        });

        // 음수 값 처리
        const negativeNumbers = numbers.filter(num => num < 0);

        if (negativeNumbers.length > 0) {
            throw new Error(ERROR_MESSAGES.NEGATIVE_NUMBER_NOT_ALLOWED);
        }
    }
}