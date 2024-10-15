import { Console } from "@woowacourse/mission-utils";

const INPUT_PROMPT = '덧셈할 문자열을 입력해주세요.\n'; 
const DEFAULT_SEPARATOR = '[,:]';


const isPositiveNumber = (arr) => {
    return arr.every(num => Number(num) > 0);
}

const splitUserInput = (input) => {
    const match = input.match(/\/\/(.)\\n/);
    const CUSTOM_SEPARATOR = match[1];

    let userInputArray = undefined;
    console.log(CUSTOM_SEPARATOR);

    if (CUSTOM_SEPARATOR){
        const numbersPart = CUSTOM_SEPARATOR ? input.split("\\n")[1] : input;
        console.log(numbersPart)
        userInputArray = numbersPart.split(new RegExp(`[${CUSTOM_SEPARATOR}]`));
        console.log(userInputArray);
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

        Console.print(userInputArray);

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

getUserNumbers();