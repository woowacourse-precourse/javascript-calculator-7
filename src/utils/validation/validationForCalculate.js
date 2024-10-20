import { ERROR_MESSAGES } from "../../constants/errorMsg.js";

export const validateNumber = (number) => {
    const numValue = Number(number);

    if (numValue < 0) {
        throw new Error(ERROR_MESSAGES.WRONG_INPUT);
    }

    if (number.length === 0) {
        throw new Error(ERROR_MESSAGES.WRONG_SEPARATOR_USE);
    }

    if (isNaN(numValue)) {
        throw new Error(ERROR_MESSAGES.WRONG_SEPARATOR);
    }

    return numValue;
};