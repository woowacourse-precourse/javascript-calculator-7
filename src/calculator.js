export function calculator(input) {
    const baseSeparators = /[,:]/;
    const allowedCustomSeparators = /[~!@#$%^&*_\/\?]/
    let customSeparator;
    let numbersPart = input;
    let isCustom = false;
    let numbersArr = [];

    // 입력한 값이 없는 경우
    if (!input) {
        return 0;
    }

    input = input.replace(/\\n/g, '\n');

    // 커스텀 구분자를 사용한 경우
    if (input.startsWith('//')) {
        if (!input.includes('\n')) {
            throw new Error('[ERROR] 커스텀 구분자 뒤에는 \\n이 필요합니다.');
        }

        isCustom = true
        customSeparator = input.substring(2, 3);

        // 예외처리: 커스텀 구분자가 한 글자가 아닌 경우
        const separatorPart = input.split('\n')[0].substring(2);
        if (separatorPart.length != 1) {
            throw new Error(`[ERROR] 커스텀 구분자는 한 글자여야 합니다.`);
        }

        // 예외처리: 커스텀 구분자가 허용된 특수문자가 아닌 경우
        if (!customSeparator.match(allowedCustomSeparators)) {
            throw new Error(`[ERROR] 커스텀 구분자는 다음 중 하나여야 합니다: ~, !, @, #, $, %, ^, &, *, _, /, ?`);
        }

        numbersPart = input.split('\n')[1];
    }

    // 구분자를 기준으로 분리
    if (isCustom == true) {
        numbersArr = numbersPart.split(customSeparator);
    } else {
        numbersArr = numbersPart.split(baseSeparators);
    }

    // 예외처리: 공백이나 연속된 구분자가 있는 경우
    if (numbersArr.some(num => num.trim() === '')) {
        throw new Error('[ERROR] 공백이나 연속된 구분자가 있으면 안 됩니다.');
    }

    // 예외처리: 숫자가 아닌 값이 있는 경우
    if (numbersArr.some(num => isNaN(num))) {
        throw new Error('[ERROR] 숫자가 아닌 값이 들어올 수 없습니다.');
    }

    // 예외처리: 양수가 아닌 값이 있는 경우
    numbersArr = numbersArr.map(Number);
    if (numbersArr.some(num => num <= 0)) {
        throw new Error('[ERROR] 음수나 0은 입력할 수 없습니다.');
    }

    // 합을 반환
    return numbersArr.reduce((sum, num) => sum + num, 0);
}
