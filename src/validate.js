export function isValidSeperator({ seperator }) {
    if (seperator.length !== 1)
        throw new Error('[ERROR] 입력한 커스텀 구분자는 1글자가 아닙니다.');
    if (!isNaN(seperator)) {
        throw new Error('[ERROR] 커스텀 구분자는 숫자가 될 수 없습니다.' )
    }
}