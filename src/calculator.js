export function calculator(input) {
    let baseSeparators = /[,|:]/
    let customSeparator;
    let numbersPart = input
    let isCustom = false
    let numbersArr = []

    // 입력한 값이 없는 경우
    if (!input) {
        return 0;
    }

    // 커스텀 구분자를 사용한 경우
    if (input.startsWith('//')) {
        if (!input.includes('\n')) {
            throw new Error('[ERROR] 커스텀 구분자 뒤에는 \\n이 필요합니다.')
        }

        isCustom = true
        customSeparator = input.substring(2, 3);
        numbersPart = input.split('\n')[1]
    }

    // 구분자를 기준으로 분리
    if (isCustom == true) {
        numbersArr = numbersPart.split(new RegExp(`[${customSeparator}]`))
    } else {
        numbersArr = numbersPart.split(baseSeparators)
    }

    // 양수인지 검증
    numbersArr = numbersArr.map(Number);
    if (numbersArr.some(num => num <= 0)) {
        throw new Error('[ERROR] 음수나 0은 입력할 수 없습니다.')
    }

    // 합을 반환
    return numbersArr.reduce((sum, num) => sum + num, 0)
}
