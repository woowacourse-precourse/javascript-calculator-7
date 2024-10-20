import {ERROR_MESSAGES} from "../constants/constants.js";
import {isEmpty} from "../extensions/stringExtensions.js";

export function validateInput(input){
    if(isEmpty(input)){
        throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
}

export function validateNumbers(numbers){
    if(numbers.some(num => isNaN(num) || Number(num) < 0)){
        throw new Error(ERROR_MESSAGES.INVALID_INPUT);
    }
}
