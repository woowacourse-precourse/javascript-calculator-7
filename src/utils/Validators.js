class Validators {
    static CUSTOM_SEPARATOR_REGEX = /^\/\/(.)\n/;
    static NUMBER_AND_SEPARATOR_REGEX = /^\d+([,:]|\d+)*$/;

    static validateInput(input) {
        // 1. 빈 입력 검사
        if (input.trim() === '') {
            throw new Error('[ERROR] 입력값이 비어 있습니다.');
        }

        // 2. 커스텀 구분자 확인
        const customSeparator = input.match(this.CUSTOM_SEPARATOR_REGEX);
        if (customSeparator) {
            // 2-1. 커스텀 구분자가 있는 경우
            const numberPart = input.split('\n')[1];
            if (!this.isValidNumberString(numberPart, customSeparator[1])) {
                throw new Error('[ERROR] 유효하지 않은 입력값입니다.');
            }
        } else {
            // 2-2. 기본 구분자만 있는 경우
            if (!this.isValidNumberString(input)) {
                throw new Error('[ERROR] 유효하지 않은 입력값입니다.');
            }
        }
    }

    static isValidNumberString(str, customSeparator = null) {
        if (customSeparator) {
            // 커스텀 구분자를 사용하는 경우: 새로운 정규식으로 검사
            const regex = new RegExp(`^\\d+(${customSeparator}\\d+)*$`);
            return regex.test(str);
        }
        // 기본 구분자를 사용하는 경우
        return this.NUMBER_AND_SEPARATOR_REGEX.test(str);
    }
}

export default Validators;