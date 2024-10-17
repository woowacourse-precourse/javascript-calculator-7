import {
    SEPERATOR_STRING,
    DEFAULT_SEPERATOR,
    NUMBER_PATTERN
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

function hasExpressionError(expression, seperatorArray){
    seperatorArray.map((seperator) => {
        expression = expression.replaceAll(seperator, "");
    })
    return NUMBER_PATTERN.test(expression);
}

function splitBySeperator(expression, seperatorArray){
    seperatorArray.map((seperator) => {
        expression = expression.replaceAll(seperator, "@");
    })
    return expression.split('@');
}

function sumArray(array){
    return array.reduce((acc, num) => acc + parseInt(num), 0);
}

export {
    getSeperatorArray,
    getExpressionString,
    hasExpressionError,
    splitBySeperator,
    sumArray,
}