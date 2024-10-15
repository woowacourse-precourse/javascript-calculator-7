import {SEPERATOR_STRING,DEFAULT_SEPERATOR} from '../constant/index.js'

export function initSeperatorArray(){
    const seperator = [];
    DEFAULT_SEPERATOR.map((element)=> {
        seperator.push(element);
    })
    return seperator;
}

export function getSeperatorArray(expression, seperator){
    if(expression.startsWith(SEPERATOR_STRING.START)){
        const seperatorStartIndex = expression.indexOf(SEPERATOR_STRING.START) + 2;
        const seperatorEndIndex = expression.indexOf(SEPERATOR_STRING.END);
        seperator.push(expression.slice(seperatorStartIndex, seperatorEndIndex))
    }
    return seperator;
}