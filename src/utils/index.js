import {
    SEPERATOR_STRING,
    DEFAULT_SEPERATOR,
    NUMBER_PATTERN,
    SEPERATOR_SUBTITUTE,
    NULL_STRING,
    ERROR_MESSAGE,
    EMPTY_INPUT_ARRAY
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

function hasNullSeperatorError(seperatorArray){
    return seperatorArray.includes('');
}

function hasUndefinedCharacterrError(expression, seperatorArray){
    seperatorArray.map((seperator) => {
        expression = expression.replaceAll(seperator, NULL_STRING);
    })
    return NUMBER_PATTERN.test(expression);
}

function hasInvalidExpressionError(numArray){
    return numArray.includes(NULL_STRING) || numArray.includes(SEPERATOR_SUBTITUTE.repeat(2));
}

function checkExpressionError(expression, seperetorArray, numArray){
    if(hasNullSeperatorError(seperetorArray)){
        throw new Error(ERROR_MESSAGE.NULL_SEPERATOR);
    }
    if(hasUndefinedCharacterrError(expression, seperetorArray)){
        throw new Error(ERROR_MESSAGE.UNDEFINED_CHARACTER);
    }
    if(hasInvalidExpressionError(numArray)){
        throw new Error(ERROR_MESSAGE.INVALID_EXPRESSION);
    }
}

function splitBySeperator(expression, seperatorArray){
    seperatorArray.map((seperator) => {
        expression = expression.replaceAll(seperator, SEPERATOR_SUBTITUTE);
    })
    return expression ? expression.split(SEPERATOR_SUBTITUTE) : EMPTY_INPUT_ARRAY;
}

function sumArray(array){
    return array.reduce((acc, num) => acc + parseInt(num), 0);
}

export {
    getSeperatorArray,
    getExpressionString,
    checkExpressionError,
    splitBySeperator,
    sumArray,
}