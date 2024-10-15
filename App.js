import { Console } from "@woowacourse/mission-utils";

const INPUT_PROMPT = '덧셈할 문자열을 입력해주세요.\n'; 


const isPositiveNumber = (arr) => {
    return arr.every(num => Number(num) > 0);
}


async function getUserNumbers(){

    try{
        const userInput = await Console.readLineAsync(INPUT_PROMPT);
        let userInputArray = userInput.split(/[,:]/);
        
        const isValid = isPositiveNumber(userInputArray);
        Console.print(userInputArray);


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