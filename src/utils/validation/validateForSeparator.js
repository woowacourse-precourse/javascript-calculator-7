import { ERROR_MESSAGES } from "../../constants/errorMsg.js";

export const validateCustomSeparator = (customSeparator) => {
    if (!isNaN(customSeparator)) {
        throw new Error(ERROR_MESSAGES.WRONG_CUSTOM);
    }
};

export const validateInputFormat = (START, END) => {
    if (START === 1 || END === -1) {
        throw new Error(ERROR_MESSAGES.WRONG_CUSTOM);
    }
};

export const validateFirstChar = (input) => {
    if (isNaN(input[0])) {
        throw new Error(ERROR_MESSAGES.WRONG_INPUT);
    }
};