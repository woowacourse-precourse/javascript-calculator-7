const inputParser = {

    getSeperator({ inputText }) {
        let stringNumbers = inputText;
        
        if(inputText.charAt(0) === '/') {
            return this.setSeperator(inputText)
        } else {
            return inputText;
        }
        
    },

    setSeperator(inputText) {
        // "//" 이후의 문자열 가져오기
        const beforeSeperatorIndex = inputText.indexOf("//") + 2;
            
        // "\n"이 있는 경우와 없는 경우를 처리
        const afterSeperatorIndex = inputText.indexOf("\n", beforeSeperatorIndex);
        if (afterSeperatorIndex === -1) {  // \n이 없는 경우
            throw new Error("[ERROR] 커스텀 구분자 입력이 완료되지 않았습니다.");
        } else {  // \n이 있는 경우
            const seperator = inputText.slice(beforeSeperatorIndex, afterSeperatorIndex);
            if(isValidSeperator(seperator)) { // 구분자 유효성 검사
                return [seperator, this.deleteSeperatorInput(inputText, afterSeperatorIndex)];
            }
        }
    },

    deleteSeperatorInput(inputText, endSeperatorInput) {
        return inputText.substring(endSeperatorInput + 1)
    }

}

export default inputParser;