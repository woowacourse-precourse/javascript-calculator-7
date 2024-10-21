import {ERROR_MESSAGES} from "../constants/constants.js";
import {isEmpty} from "../extensions/stringExtensions.js";

export function validateInput(input){
    if(isEmpty(input)){
        throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
}

export function validateNumbers(numbers){
    const negativeNumbers = numbers.filter(num => Number(num) < 0);
    if(negativeNumbers.length > 0){
        throw new Error(`${ERROR_MESSAGES.NEGATIVE_NUMBER}: ${negativeNumbers.join(', ')}`);
    }
    if(numbers.some(num => isNaN(num))){
        throw new Error(ERROR_MESSAGES.INVALID_INPUT);
    }
}
