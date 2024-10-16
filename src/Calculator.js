import { MissionUtils } from "@woowacourse/mission-utils";

class Calculator {
    start() {
        MissionUtils.Console.print('문자열 덧셈 계산기를 실행합니다.');
        this.GetUserInput();
        
    }
    async GetUserInput() {
        const userInput = await MissionUtils.Console.readLineAsync('문자열을 입력해주세요: ');
        
        // 올바른 값인지 확인 (수정중)
        this.validateInput(userInput);
        
        
    }
    validateInput(input) {
        let isValid = true;
        let userInput = input.trim();
        const separators = [',',':'];
        // 커스텀 구분자가 있는지
        if(userInput.startsWith("//")) {
            const endIndex = userInput.indexOf("\\n");
            const customSeparator = userInput.slice(2,endIndex);

            // 커스텀 구분자를 기본 구분자 중 하나인 쉼표로 치환
            userInput = userInput.slice(endIndex + 2).split(customSeparator).join(',');
        }
      
        // 쉼표 또는 콜론 구분자가 있는지
       const hasDefaultSeparator = separators.some(v => userInput.includes(v));
       console.log(hasDefaultSeparator);
        // 양수인지

        // 올바른 값이 아닐 때
        // if (!isValid) throw new Error;
    }

}

export default Calculator;