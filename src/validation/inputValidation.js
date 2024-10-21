import { ERROR_MESSAGE } from "../constants/constants";

function inputValdation() {
    const invalidInputError = () => {
        throw new Error(ERROR_MESSAGE.invalidInputError);
    }

    const negativeInputError = () => {
        throw new Error(ERROR_MESSAGE.negativeInputError);
    }

    const separatorError= () => {
        throw new Error(ERROR_MESSAGE.separatorError);
    }

    return {
        invalidInputError,
        negativeInputError,
        separatorError
    };
}

export default inputValdation;