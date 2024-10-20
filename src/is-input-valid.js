function isInputValid(input) {
    const positiveIntegerPattern = /^[1-9]\d*$/;

    if(input.startsWith('//')) {
        validateCustomDelimiterInput(input, positiveIntegerPattern);
    } else {
        if(input!==''){
            validateDefaultInput(input, positiveIntegerPattern);
        }
    }
}

function validateCustomDelimiterInput(input, pattern) {
    const customDelimiterStartIndex = input.indexOf('\\n');
    if(customDelimiterStartIndex === -1 || customDelimiterStartIndex !==3){
        throw new Error('[ERROR] 커스텀 구분자를 설정하려면 허용된 형식으로 입력해 주세요.');
    }

    const delimiter = input.slice(2, customDelimiterStartIndex);
    const escapedDelimiter = delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    if(pattern.test(escapedDelimiter) || escapedDelimiter === '0'){
        throw new Error('[ERROR] 커스텀 구분자를 설정하려면 허용된 형식으로 입력해 주세요.');
    }
    const string = input.slice(customDelimiterStartIndex + 2);
    validateString(string, escapedDelimiter, pattern);
}

function validateDefaultInput(input, pattern) {
    const arr = input.split(/[,:]/);
    validateArray(arr, pattern);

}

function validateString(string, delimiter, pattern) {
    const arr = string.split(new RegExp(`[${delimiter},:]`));
    if(arr.length === 0 || arr.some(value => !pattern.test(value))) {
        throw new Error('[ERROR] 입력값이 형식에 맞는지 확인해 주세요.');
    }
}

function validateArray(arr, pattern) {
    if(arr.some(value => !pattern.test(value))) {
        throw new Error('[ERROR] 입력값이 형식에 맞는지 확인해 주세요.');
    }
}

export default isInputValid;

