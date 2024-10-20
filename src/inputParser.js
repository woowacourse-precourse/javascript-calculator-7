import { isValidSeperator } from "./validate.js";

const inputParser = {

    getSeperator({ inputText }) {
        if(inputText.startsWith("//")) {
            //커스텀 구분자 입력으로 시작할 경우 커스텀 구분자를 구하는 함수를 사용한다.
            return this.setSeperator({ inputText })
        } else {
            return [inputText, null];
        }
        
    },

    //커스텀 구분자를 구하는 함수
    setSeperator({ inputText }) {
        try {
            // "//" 이후의 문자열 가져오기
            console.log(inputText)
            const beforeSeperatorIndex = inputText.indexOf("//") + 2;
            
            // "\n"이 있는 경우와 없는 경우를 처리
            const afterSeperatorIndex = inputText.indexOf("\\n", beforeSeperatorIndex);
            console.log(beforeSeperatorIndex, afterSeperatorIndex)

            if (afterSeperatorIndex === -1) {
                throw new Error("[ERROR] 커스텀 구분자 입력이 완료되지 않았습니다.");
            }

            const seperator = inputText.slice(beforeSeperatorIndex, afterSeperatorIndex);
            console.log(seperator)

            
            if (!isValidSeperator({ seperator })) {
                throw new Error("[ERROR] 유효하지 않은 구분자입니다.");
            }

            const remainingString = this.deleteSeperatorInput({ inputText, endSeperatorInput: afterSeperatorIndex });
            console.log(remainingString)

            return [remainingString, seperator];

        } catch (error){
            throw error;
        }
    },

    deleteSeperatorInput({ inputText, endSeperatorInput }) {
        return inputText.substring(endSeperatorInput + 2)
    }

}

export default inputParser;