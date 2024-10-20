class Validators {
    static CUSTOM_SEPARATOR_REGEX = /^\/\/(.)\n/;
    static NUMBER_AND_SEPARATOR_REGEX = /^\d+([,:]|\d+)*$/;

    static validateInput(input) {
        // 1. 빈 입력 검사
        if (input.trim() === '') {
            throw new Error('[ERROR] 입력값이 비어 있습니다.');
        }

        // 2. 커스텀 구분자 확인
        if (input.startsWith('//')) {
            const customSeparator = input.match(this.CUSTOM_SEPARATOR_REGEX);
            if (!customSeparator) {
                throw new Error(`[ERROR] 커스텀 구분자 형식이 올바르지 않습니다. "//[구분자]\\n" 형식이어야 합니다.`);
            }
            const [, numberPart] = input.split('\n');
            if (!numberPart || numberPart.trim() === '') {
                throw new Error('[ERROR] 커스텀 구분자 이후 숫자 입력이 없습니다.');
            }
            if (!this.isValidNumberString(numberPart, customSeparator[1])) {
                throw new Error(`[ERROR] 유효하지 않은 형식입니다. (커스텀 구분자 '${customSeparator[1]}' 사용)`);
            }
        } else {
            // 3. 기본 구분자 확인
            if (!this.isValidNumberString(input)) {
                throw new Error('[ERROR] 유효하지 않은 형식입니다. (기본 구분자 사용)');
            }
        }
    }

    static isValidNumberString(str, customSeparator = null) {
        if (customSeparator) {
            // 커스텀 구분자를 사용하는 경우: 새로운 정규식으로 검사
            const escapedSeparator = customSeparator.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`^\\d+(${escapedSeparator}\\d+)*$`);
            return regex.test(str);
        }
        // 기본 구분자를 사용하는 경우
        return this.NUMBER_AND_SEPARATOR_REGEX.test(str);
    }
}

export default Validators;