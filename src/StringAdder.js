import { Console } from "@woowacourse/mission-utils";


const CalculatorType = Object.freeze({
    basic : Symbol(0),
    custom : Symbol(1),
    error : Symbol(2)
});

class StringAdder {
    constructor(input) {
        this.input = input;
        this.result = 0;
        this.type = CalculatorType.basic;
        this.seperator = "";
    }

    // 구분자 판단, 계산기 선택
    getSeperator(input) {
        if (input.length() == 0){ // 입력이 없을 경우 오류
            this.type = CalculatorType.error;
            return;
        }

        if (Number(input[0])) { // 기본계산기
            return;
        }

        let idx = 0;
        let isFindSeperator = false;
        while (idx<input.length){
            if ((idx == 0 || idx==1) && input[idx]!='/'){
                break;
            }
            while (input[idx]!='\n'){
                this.seperator += input[idx]; 
                idx++;
            }
            if (input[idx]=='\n'){
                isFindSeperator = true;
                break;
            }
            idx++;
        }
        if (isFindSeperator){
            this.type = CalculatorType.custom;
            this.input = input.substr(idx+1, input.length - idx);    
        }else{
            this.type = CalculatorType.error;
        }
        return;
    }
}
