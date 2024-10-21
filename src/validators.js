export function validateInput(input) {
    if (input.trim() === '') {
        throw Error("[ERROR]");
    }
}

export function validateCustomSeparator(input, number) {
    if (!input.startsWith('//') || !number) {
        throw Error("[ERROR]")
    }
}

export function validateAndConvertNumber(item) {
    const num = Number(item);
    if (isNaN(num)) {
        throw Error("[ERROR]");
    }
    if (num < 0) {
        throw Error("[ERROR]");
    }
    return num;
}