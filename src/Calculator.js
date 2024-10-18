import { MissionUtils } from "@woowacourse/mission-utils";
import { errorMessage } from "./utils/errorMessage.js";

class Calculator {
    async start() {
        try {
            const userInput = await this.GetUserInput();
            const result = this.validateInput(userInput);
            if (result) MissionUtils.Console.print(`결과 : ${result}`);
            MissionUtils.Console.print('문자열 덧셈 계산기를 종료합니다.');
        } catch (error) {
            throw error;
        }
    }

    async GetUserInput() {
        const userInput = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해주세요.(쉼표와 콜론 외에 //로 시작해 \\n 사이에 입력한 문자열을 커스텀 구분자로 사용 가능합니다.):\n');
        
        return userInput;
    }

    validateInput(input) {
        let result = 0; // 덧셈 결과
        let userInput = input.trim();
        let isPositiveNum = false; // 양수인지 판단하는 변수
        
        // 입력값이 없을 때 throw new Error
        if(!userInput) throw new Error(errorMessage.NO_INPUT);
        
        // 커스텀 구분자가 있는지
        if(userInput.startsWith("//")) {
            const nIndex = userInput.indexOf("\\n");
            if (nIndex > -1) {
                const customSeparator = userInput.slice(2,nIndex);
                
                // 커스텀 구분자를 기본 구분자 중 하나인 쉼표로 치환
                userInput = userInput.slice(nIndex + 2).split(customSeparator).join(',');
            }
        }

        // 기본 구분자를 기준으로 나눈 문자열 배열
        const separatedStr = userInput.split(/[,|:]/);
        
        // 구분자가 연속됐는지
        const regex = /,,|,:|:,|::/g;
        const isRepeated = regex.test(userInput)

        // 구분자가 문자열 앞 또는 뒤에 오는지
        const isAtStartOrEnd = separatedStr[0] === "" || separatedStr[separatedStr.length -1] === "";

        // 구분자가 아닌 문자가 포함되어 있는지(구분자가 연속되거나 문자열 앞 뒤에 올 때도 해당)
        const includeInvalidStr = isRepeated || isAtStartOrEnd || separatedStr.filter(Boolean).map(Number).some(v => Number.isNaN(v));  
        
        // 숫자 배열
        const numbers = !includeInvalidStr ? separatedStr.filter(Boolean).map(Number) : 
        userInput.match(/-?\d+/g).map(Number);
        
        if(numbers && numbers.length > 0) {
            // 양수인지
            isPositiveNum = numbers.every(v => v > 0);

            // 올바른 입력 값일 때 합계 구하기
            if(isPositiveNum && !includeInvalidStr) {
               const sum = numbers.reduce((acc, curr) => acc + curr, 0);
               result = sum;
            }
        }

        // 예외 처리
        this.handleError(isPositiveNum, includeInvalidStr);
        
        return result;
    }

    handleError(isPositiveNum, includeInvalidStr) {
        if(includeInvalidStr && !isPositiveNum) {
            throw new Error(errorMessage.NONE_OF_THE_VALUE);
        } else if(includeInvalidStr && isPositiveNum) {
            throw new Error(errorMessage.NO_SEPARATOR);
        } else if(!isPositiveNum) {
            throw new Error(errorMessage.NOT_POSITIVE_NUM);
        }
    }
}

export default Calculator;