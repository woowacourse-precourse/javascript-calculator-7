import { Console } from "@woowacourse/mission-utils";

const INPUT_PROMPT = '덧셈할 문자열을 입력해주세요.\n'; 
const OUTPUT_PROMPT = '결과 : ';
const DEFAULT_SEPARATOR = '[,:]';

const isPositiveNumber = (arr) => {
    return arr.every(num => Number(num) > 0);
}

const getSum = (arr) => {
    return arr.reduce( (acc,cur) => acc + cur,  0);
}

const splitUserInput = (input) => {
    const match = input.match(/\/\/(.)\\n/);
    const CUSTOM_SEPARATOR = match ? match[1] : null ;

    let userInputArray = undefined;

    if (CUSTOM_SEPARATOR){
        const numbersPart = CUSTOM_SEPARATOR ? input.split("\\n")[1] : input;
        userInputArray = numbersPart.split(new RegExp(`[${CUSTOM_SEPARATOR}]`));
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

        const isValid = isPositiveNumber(userInputArray);

        if(!isValid){
            throw new Error('[ERROR]: 입력한 숫자가 양수가 아닙니다.');
        }

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