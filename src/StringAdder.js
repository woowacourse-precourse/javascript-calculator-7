import { MissionUtils } from "@woowacourse/mission-utils";


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
    // 구분자로 나누기
    splitString() {
        switch(this.type){
            case CalculatorType.basic:
                return this.input.split(/,|:/);
            case CalculatorType.custom:
                return this.input.split(this.seperator);
            case CalculatorType.error:
                return new Array();
        }
    }
    // 숫자로 변환 후 덧셈
    addNumber(splitList) {
        for (let i=0; i<splitList.length; i++){
            let number = Number(splitList[i]);
            if (number == NaN){
                this.type = CalculatorType.error;
                break;
            }
            this.result += number;
        }
    }
    // 출력
    printResult() {
        try{
            if(this.type == CalculatorType.error){
                throw new Error("[Error]");
            }else{
                MissionUtils.Console.print("결과 : " + this.result);
            }
        }
    }

    doCalculator(){
        this.getSeperator(this.input);
        this.splitString();
        this.addNumber();
        this.printResult();
    }
}
