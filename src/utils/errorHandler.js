export function isCustomSeparatorError(param) {
    if (!isNaN(param)) {
        throw new Error("[ERROR]: 에러발생");
    }
}

export function checkForErrors(param) {
    if (Number(param) < 0 || param === "" || isNaN(param.trim())) {
        throw new Error("[ERROR]: 에러발생");
    }
}
