export function isCustomSeparatorError(param) {
    if (!isNaN(param)) {
        throw new Error("[ERROR]: 에러발생");
    }
}

export function checkForErrors(param) {
    if (param === "" || isNaN(param)) {
        throw new Error("[ERROR]: 잘못된 입력");
    }

    if (Number(param) < 0) {
        throw new Error("[ERROR]: 음수 입력 불가");
    }

    if (param.trim() !== param || param === " ") {
        throw new Error("[ERROR]: 공백은 입력 불가");
    }
}
