import { MissionUtils } from "@woowacourse/mission-utils";


export const CalculatorType = Object.freeze({
    basic : Symbol(0),
    custom : Symbol(1),
    error : Symbol(2)
});

export class StringAdder {
    constructor(input) {
        this.input = input;
        this.result = 0;
        this.type = CalculatorType.basic;
        this.seperator = "";
    }

    getSeperator(input) {
        // 입력이 빈 문자열인 경우
        if (input.length == 0) {
            this.type = CalculatorType.basic;
            return;
        }
    
        // 기본 구분자 (숫자로 시작하면 기본 계산기로 처리)
        if (!isNaN(Number(input[0]))) { 
            return;
        }
    
        // 커스텀 구분자 처리 (//로 시작하는지 확인)
        if (input.startsWith("//")) {
            let idx = input.indexOf("\\n"); // \n의 위치 찾기
            if (idx !== -1) {
                this.seperator = input.substring(2, idx); // // 이후부터 \n까지를 구분자로 추출
                this.input = input.substring(idx + 2); // \n 이후의 문자열이 숫자 리스트
                this.type = CalculatorType.custom;
            } else {
                this.type = CalculatorType.error; // 잘못된 입력 처리
            }
        } else {
            this.type = CalculatorType.error; // 잘못된 입력 처리
        }
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
            // 숫자가 아닌 경우 예외 처리
            if (isNaN(number)){
                this.type = CalculatorType.error;
                break;
            }
            this.result += number;
        }
    }
    // 출력
    printResult() {
        if(this.type == CalculatorType.error){
            // throw new Error("[Error]");
            throw Error("[ERROR]");
        }else{
            // console.log(this.result);
            MissionUtils.Console.print("결과 : " + this.result);
        }
    }

    doCalculator(){
        this.getSeperator(this.input);
        this.addNumber(this.splitString());
        this.printResult();
    }
}
