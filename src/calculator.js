export function calculator(input) {
    let baseSeparators = /[,:]/;
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
        numbersPart = input.split('\n')[1];
    }

    // 구분자를 기준으로 분리
    if (isCustom == true) {
        numbersArr = numbersPart.split(customSeparator);
    } else {
        numbersArr = numbersPart.split(baseSeparators);
    }

    // 공백이나 연속된 구분자가 있는지 검증
    if (numbersArr.some(num => num.trim() === '')) {
        throw new Error('[ERROR] 공백이나 연속된 구분자가 있으면 안 됩니다.');
    }

    // 숫자가 아닌 값이 있는지 검증
    if (numbersArr.some(num => isNaN(num))) {
        throw new Error('[ERROR] 숫자가 아닌 값이 들어올 수 없습니다.');
    }

    // 양수가 아닌 값이 있는지 검증
    numbersArr = numbersArr.map(Number);
    if (numbersArr.some(num => num <= 0)) {
        throw new Error('[ERROR] 음수나 0은 입력할 수 없습니다.');
    }

    // 합을 반환
    return numbersArr.reduce((sum, num) => sum + num, 0);
}
