import { isValidSeparator } from "./validate.js";

const inputParser = {

    getSeparator({ inputText }) {
        if(inputText.startsWith("//")) {
            //커스텀 구분자 입력으로 시작할 경우 커스텀 구분자를 구하는 함수를 사용한다.
            return this.setSeparator({ inputText })
        } else {
            return [inputText, null];
        }
        
    },

    //커스텀 구분자를 구하는 함수
    setSeparator({ inputText }) {
        try {
            // "//" 이후의 문자열 가져오기
            const beforeSeparatorIndex = inputText.indexOf("//") + 2;
            
            // "\n"이 있는 경우와 없는 경우를 처리
            const afterSeparatorIndex = inputText.indexOf("\\n", beforeSeparatorIndex);

            if (afterSeparatorIndex === -1) {
                throw new Error("[ERROR] 커스텀 구분자 입력이 완료되지 않았습니다.");
            }

            const separator = inputText.slice(beforeSeparatorIndex, afterSeparatorIndex);
            if (!isValidSeparator({ separator })) {
                throw new Error("[ERROR] 유효하지 않은 구분자입니다.");
            }

            const remainingString = this.deleteSeparatorInput({ inputText, endSeparatorInput: afterSeparatorIndex });
            return [remainingString, separator];

        } catch (error){
            throw error;
        }
    },

    deleteSeparatorInput({ inputText, endSeparatorInput }) {
        return inputText.substring(endSeparatorInput + 2)
    }

}

export default inputParser;