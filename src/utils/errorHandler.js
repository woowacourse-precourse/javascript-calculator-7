import {ERROR_MESSAGE} from "../constants/message.js";

export function isCustomSeparatorError(param) {
    if (!isNaN(param)) {
        throw new Error("[ERROR]: 에러발생");
    }
}

export function checkForErrors(param) {
    if (param === "" || isNaN(param)) {
        throw new Error(ERROR_MESSAGE.WRONG_INPUT);
    }

    if (Number(param) < 0) {
        throw new Error(ERROR_MESSAGE.WRONG_MINUS_INPUT);
    }

    if (param.trim() !== param || param === " ") {
        throw new Error(ERROR_MESSAGE.WRONG_EMPTY_INPUT);
    }
}
