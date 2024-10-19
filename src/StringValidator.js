class StringValidator {

    checkCustomDelimiterPosition(input) { // 커스텀 구분자 선언 위치 체크 함수
        if (input.includes('//') && !input.startsWith('//')) {
            throw new Error("[ERROR] 커스텀 구분자는 맨 앞에 선언 해야 합니다.");
        }
    }

    checkMultipleDeclareCustomDelimiter(input) { // 커스텀 구분자 선언을 두 번이상 하는지 체크 함수
        const customDelimiterPattern = /\/\/./g;
        const matches = input.match(customDelimiterPattern);
        if (matches && matches.length > 1) {
            throw new Error("[ERROR] 커스텀 구분자 선언은 한 번만 가능합니다.");
        }
    }

    checkEmptyString(input) { // 빈 문자열 체크 함수
        if (input.trim() === "") {
            throw new Error("ERROR : 빈 문자열이 입력되었습니다.");
        }
    }

    checkNegativeNumbers(parsedArray) { // 음수 체크 함수
        parsedArray.forEach((item) => {
            const parsedNum = parseInt(item, 10);
            if (parsedNum < 0) {
                throw new Error("[ERROR] 음수가 포함되어 있습니다.");
            }
        });
    }

    checkIncludesNonNumber(parsedArray) { // 숫자, 알파벳, 한글, 구분자 외 특수문자 체크 함수
        const nonNumberPattern = /[^\d\s-]+/g;
        parsedArray.forEach((item) => {
            if (nonNumberPattern.test(item)) {
                throw new Error("[ERROR] 숫자가 아닌 문자가 포함되어 있습니다.");
            }
        });
    }

    checkMultipleDelimiter(input, customDelimiter) { // 커스텀, 기본 구분자 중복 사용 체크 함수 
        const multipleDelimiterPattern = customDelimiter ? new RegExp(`[${customDelimiter},:]{2,}`) : /[,|:]{2,}/;
        if (multipleDelimiterPattern.test(input)) {
            throw new Error("[ERROR] 구분자가 여러개 사용되었습니다.");
        }
    }
}

export default StringValidator;