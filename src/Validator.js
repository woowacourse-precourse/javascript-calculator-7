export class Validator {
    // 계산식 전체 예외 처리
    static validateInput = (input) => {
        // null 또는 undefined인 경우
        if (input == null) {
            throw new Error('[ERROR] 정의되지 않은 수식입니다.');
        }

        return input;
    }

    // 올바르게 선언된 구분자 예외 처리
    static validateCorrectlyDeclaredDelimiters = (userInput) => {
        if ('0' <= userInput[2] && '9' >= userInput[2]) {
            throw new Error('[ERROR] 커스텀 구분자는 숫자가 될 수 없습니다.');
        }
    }

    // 잘못 선언된 구분자 예외 처리
    static validateIncorrectlyDeclaredDelimiters = (userInput) => {
        if (userInput.includes('//') && userInput.includes('\\n')) {
            const startDelimiter = userInput.indexOf('//');
            const endDelimiter = userInput.indexOf('\\n');

            if (startDelimiter === 0) {
                throw new Error('[ERROR] 커스텀 구분자로는 한 글자의 문자만 지정할 수 있습니다.');
            }

            if (endDelimiter - startDelimiter !== 3) {
                throw new Error('[ERROR] 커스텀 구분자는 문자열 맨 앞에서만 지정할 수 있으며, 문자 하나만 지정 가능합니다.');
            }

            throw new Error('[ERROR] 커스텀 구분자는 문자열 맨 앞에서만 지정할 수 있습니다.');
        }

        else if (!userInput.includes('//') && userInput.includes('\\n')) {
            throw new Error('[ERROR] 커스텀 구분자를 지정하고 싶으시다면, 문자열 맨 앞에서 //과 함께 지정해주세요.');
        }

        else if (!userInput.includes('\\n') && userInput.includes('//')) {
            throw new Error('[ERROR] 커스텀 구분자를 지정하고 싶으시다면, 문자열 맨 앞에서 \\n과 함께 지정해주세요.');
        }
    }

    // 숫자 예외 처리
    static validateNumbers = (splitedString) => {
        const numbers = splitedString.map((value) => {
            const num = Number(value);

            if (isNaN(num)) {
                throw new Error('[ERROR] 숫자가 아닌 값이 포함되어 있습니다.');
            }

            return num;
        });

        // 음수 값 처리
        const negativeNumbers = numbers.filter(num => num < 0);

        if (negativeNumbers.length > 0) {
            throw new Error('[ERROR] 모든 숫자는 양수여야 합니다.');
        }
    }
}