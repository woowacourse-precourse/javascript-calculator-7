function isInputValid(input) {
    const positiveIntegerPattern = /^\d+$/;

    if(input.startsWith('//')){
        if(input.includes('\\n')){
            // 커스텀 구분자 추출
            const customDelimiterStartIndex = input.indexOf('\\n');
            const delimiter = input.slice(2,customDelimiterStartIndex);
            const numberString = input.substring(customDelimiterStartIndex + 2);
            const str = numberString.split(new RegExp(`[${delimiter},:]`));

            if(str === ''){
                throw new Error('[ERROR] 잘못된 값을 입력했습니다.');
            }
            for(const char of str){
                if(!positiveIntegerPattern.test(char)){
                    throw new Error('[ERROR] 잘못된 값을 입력했습니다.');
                }
            }
        } else {
            throw new Error('[ERROR] 잘못된 값을 입력했습니다.');
        }

    } else {
        const str = input.split(/[, :]/);

        for(const char of str) {
            if(!positiveIntegerPattern.test(char)){
                throw new Error('[ERROR] 잘못된 값을 입력했습니다.');
            }
        }
    }
}

export default isInputValid;