import { Console } from "@woowacourse/mission-utils";

/**
 * @enum {string} 계산기 문구 및 구분자 환경변수를 정의하는 열거형입니다.
 * @property {string} INPUT_PROMPT 덧셈할 문자열을 입력받는 프롬프트 메시지
 * @property {string} OUTPUT_PROMPT 결과를 출력하는 프롬프트 메시지
 * @property {string} DEFAULT_SEPARATOR 기본 구분자 (콤마, 콜론)
 * @property {string} CUSTOM_SEPARATOR 커스텀 구분자(//, \n 사이 문자)
 */
const CALCULATOR_VARIABLES ={

    INPUT_PROMPT : '덧셈할 문자열을 입력해주세요.\n', 
    OUTPUT_PROMPT : '결과 : ',
    DEFAULT_SEPARATOR : '[,:]',
    CUSTOM_SEPARATOR : '//(.)\\\\n'
}
Object.freeze(CALCULATOR_VARIABLES);




/**
 * 유저로부터 입력 기능 클래스
 */
class InputHandler {

    async getUserInput(){

        try {
            const userInput = await Console.readLineAsync(CALCULATOR_VARIABLES.INPUT_PROMPT);
            return userInput;
        } catch (error) {
            Console.print('[ERROR]: 입력을 받는 중 문제가 발생했습니다.');
            return null;
        }
    }

}


/**
 * 입력받은 데이터 처리 클래스
 */

class InputParser {
    
    splitUserInput(input) { 
        const customSeparatorMatch = input.match(new RegExp(CALCULATOR_VARIABLES.CUSTOM_SEPARATOR));
        const customToken = customSeparatorMatch ? customSeparatorMatch[1] : null ;

        let userInputArray;

        if (customToken){
            const numbersPart = input.split("\\n")[1];
            userInputArray = numbersPart.split(new RegExp(`[${customToken}]`));
        }
        else{
            userInputArray = input.split( new RegExp(CALCULATOR_VARIABLES.DEFAULT_SEPARATOR));
        }

        return userInputArray.map(Number) ;
    }
}

/**
 * 계산 처리 기능 클래스
 */

class CalculatorHandler {

    getSum(numbersArray) {
        return numbersArray.reduce((acc, cur) => acc + cur, 0);
    }
}

/**
 * 검증 기능 클래스
 */
class Validator {

    isValidSeparator(input) {
    
        const customSeparatorMatch = input.match(new RegExp(CALCULATOR_VARIABLES.CUSTOM_SEPARATOR));
        if (!customSeparatorMatch  && !input.match(CALCULATOR_VARIABLES.DEFAULT_SEPARATOR)) {
            throw new Error('[ERROR]: 구분자가 없거나 잘못됐습니다.');
        }
    }

    isPositiveNumber(numbersArray) {
        if (!numbersArray.every(num => Number(num) > 0)) {
            throw new Error('[ERROR]: 입력한 숫자가 양수가 아닙니다.');
        }
    }
}

/**
 * 결과 출력 기능 클래스
 */
class OutputHandler {

    printUserInput(sumValue) {
        Console.print(CALCULATOR_VARIABLES.OUTPUT_PROMPT + sumValue);
    }
}


/**
 * 기능을 종합한 계산기 
 */
class Calculator {

    constructor(){
        this.inputHandler = new InputHandler();
        this.inputParser = new InputParser();
        this.calculatorHandler = new CalculatorHandler();
        this.Validator = new Validator();
        this.outputHandler = new OutputHandler();
    }
    async run(){
        const userInput = await this.inputHandler.getUserInput();

        this.Validator.isValidSeparator(userInput);

        const numbersArray = this.inputParser.splitUserInput(userInput);

        this.Validator.isPositiveNumber(numbersArray);

        const sumValue = this.calculatorHandler.getSum(numbersArray);

        this.outputHandler.printUserInput(sumValue);
    }

}

// const run = async() => {
//     const calculator = new Calculator();
//     const userNumbers = await calculator.getUserNumbers();
//     if (userNumbers) {
//         calculator.printUserInput(userNumbers);
//     }
// }

const cal = new Calculator();
cal.run();