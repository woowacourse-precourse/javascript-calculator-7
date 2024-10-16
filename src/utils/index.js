import {
    SEPERATOR_STRING,
    DEFAULT_SEPERATOR,
} from '../constant/index.js'

function getSeperatorArray(expression){
    const seperator = DEFAULT_SEPERATOR;
    if(hasCustomSeperator(expression)){
        const seperatorStartIndex = expression.indexOf(SEPERATOR_STRING.START) + 2;
        const seperatorEndIndex = expression.indexOf(SEPERATOR_STRING.END);
        seperator.push(expression.slice(seperatorStartIndex, seperatorEndIndex))
    }
    return seperator;
}

function getExpressionString(expression){
    if(hasCustomSeperator(expression)){
        const expressionStartIndex = expression.indexOf(SEPERATOR_STRING.END) + 2;
        return expression.slice(expressionStartIndex);
    }
    return expression;
}

function hasCustomSeperator(expression){
    return expression.startsWith(SEPERATOR_STRING.START) && expression.includes(SEPERATOR_STRING.END);
}

export {
    getSeperatorArray,
    getExpressionString
}