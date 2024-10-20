import ErrorMessages from '../constant/ErrorMessage.js'

class StringValidator {

    checkEmptyString(input) { // 빈 문자열 체크 함수
        if (input.trim() === "") {
            return 0;
        }
    }

    checkCustomDelimiterPosition(input) { // 커스텀 구분자 선언 위치 체크 함수
        if (input.includes('//') && !input.startsWith('//')) {
            throw new Error(ErrorMessages.ERROR_CUSTOM_DELIMITER_POSITION);
        }
    }

    checkMultipleDeclareCustomDelimiter(input) { // 커스텀 구분자 선언을 두 번이상 하는지 체크 함수
        const customDelimiterPattern = /\/\/./g;
        const matches = input.match(customDelimiterPattern);
        if (matches && matches.length > 1) {
            throw new Error(ErrorMessages.ERROR_MULTIPLE_DECLARE_CUSTOM_DELIMITER);
        }
    }

    checkNegativeNumbers(parsedArray) { // 음수 체크 함수
        parsedArray.forEach((item) => {
            const parsedNum = parseInt(item, 10);
            if (parsedNum < 0) {
                throw new Error(ErrorMessages.ERROR_NEGATIVE_NUMBER);
            }
        });
    }

    checkIncludesNonNumber(parsedArray) { // 공백 제거하고 다른 문자가 있는지 체크 함수
        parsedArray.forEach((item) => {
            if (!/^[-]?\d+$/.test(item.trim())) {
                throw new Error(ErrorMessages.ERROR_NON_NUMBER_CHARACTER);
            }
        });
    }

    checkEmptyOrSpace(parsedArray) { // 공백이 있는지 ㅎ체크 함수
        parsedArray.forEach((item) => {
            if (item.trim() === "") {
                throw new Error(ErrorMessages.ERROR_NON_NUMBER_CHARACTER);
            }
        });
    }

    checkMultipleCustomDelimiter(parsedArray, customDelimiter) { // 커스텀 구분자 중복 사용 체크 함수
        if (customDelimiter === "\\") {
            customDelimiter = "\\\\";
        }

        const multipleDelimiterPattern = new RegExp(`[${customDelimiter}]{2,}`)
        if (multipleDelimiterPattern.test(parsedArray)) {
            throw new Error(ErrorMessages.ERROR_MULTIPLE_CUSTOM_DELIMITER);
        }
    }

    checkMultipleDefaultDelimiter(parsedArray) { // 기본 구분자 중복 사용 체크 함수
        const multipleDefaultDelimiterPattern = /[,|:]{2,}/;
        if (multipleDefaultDelimiterPattern.test(parsedArray)) {
            throw new Error(ErrorMessages.ERROR_MULTIPLE_DEFAULT_DELIMITER);
        }
    }
}

export default StringValidator;