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







const isValidSeparator = (input) => {
    
    const customSeparatorMatch  = input.match(new RegExp(CALCULATOR_VARIABLES.CUSTOM_SEPARATOR));
    if (!customSeparatorMatch  && !input.match(CALCULATOR_VARIABLES.DEFAULT_SEPARATOR)) {
        throw new Error('[ERROR]: 구분자가 없거나 잘못됐습니다.');
    }
};

const isPositiveNumber = (arr) => {
    if (!arr.every(num => Number(num) > 0)) {
        throw new Error('[ERROR]: 입력한 숫자가 양수가 아닙니다.');
    }
};

const getSum = (arr) => {
    return arr.reduce( (acc,cur) => acc + cur,  0);
}

const splitUserInput = (input) => {
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

    return userInputArray ;
}

async function getUserNumbers(){

    try{
        const userInput = await Console.readLineAsync(CALCULATOR_VARIABLES.INPUT_PROMPT);
        const userInputArray = splitUserInput(userInput);


        // 검증 블록
        isValidSeparator(userInput);
        isPositiveNumber(userInputArray);

        return userInputArray.map(Number);

    }
    catch (e) {
        Console.print(e.message);
    }


}

async function printUserInput(input) {
    let sumValue = getSum(input);
    Console.print(CALCULATOR_VARIABLES.OUTPUT_PROMPT + sumValue);

}


async function run() {
    const userNumbers = await getUserNumbers();
    if (userNumbers) {
        printUserInput(userNumbers);
    }
}

run();