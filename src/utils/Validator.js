import {ERROR_MESSAGES} from "../constants/constants.js";
import {isEmpty} from "../extensions/stringExtensions.js";

export function validateInput(input){
    if(isEmpty(input)){
        throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
}
