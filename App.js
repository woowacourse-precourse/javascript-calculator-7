import { Console } from "@woowacourse/mission-utils";

const INPUT_PROMPT = '덧셈할 문자열을 입력해주세요.\n'; 
const OUTPUT_PROMPT = '결과 : ';
const DEFAULT_SEPARATOR = '[,:]';
const CUSTOM_SEPARATOR = '//(.)\\\\n';


const isValidSeparator = (input) => {
    
    const customSeparatorMatch  = input.match(new RegExp(CUSTOM_SEPARATOR));
    if (!customSeparatorMatch  && !input.match(DEFAULT_SEPARATOR)) {
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
    const customSeparatorMatch = input.match(new RegExp(CUSTOM_SEPARATOR));
    const customToken = customSeparatorMatch ? customSeparatorMatch[1] : null ;

    let userInputArray;

    if (customToken){
        const numbersPart = input.split("\\n")[1];
        userInputArray = numbersPart.split(new RegExp(`[${customToken}]`));
    }
    else{
        userInputArray = input.split( new RegExp(DEFAULT_SEPARATOR));
    }

    return userInputArray ;
}

async function getUserNumbers(){

    try{
        const userInput = await Console.readLineAsync(INPUT_PROMPT);
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
    Console.print(OUTPUT_PROMPT + sumValue);

}


async function run() {
    const userNumbers = await getUserNumbers();
    if (userNumbers) {
        printUserInput(userNumbers);
    }
}

run();