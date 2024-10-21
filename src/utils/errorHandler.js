import {ERROR_MESSAGE} from "../constants/message.js";

export function handleCustomSeparatorError(param) {
    if (param === "") {
        throw new Error(ERROR_MESSAGE.WRONG_CUSTOM_SEPARATOR);
    }
    if (!isNaN(param)) { //"//"와 "\n" 사이에 위치하는 "문자"를 커스텀 구분자로 사용한다.
        throw new Error(ERROR_MESSAGE.WRONG_NOT_STRING_CUSTOM_SEPARATOR);
    }
}

export function handleStringError(param) {
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
