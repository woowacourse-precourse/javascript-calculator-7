import { Console } from "@woowacourse/mission-utils";
import {
    getSeperatorArray,
    getExpressionString,
    checkExpressionError,
    splitBySeperator,
    sumArray,
} from './utils/index.js';

export function calculator(expression){
    const seperatorArray = getSeperatorArray(expression);
    const expressionString = getExpressionString(expression);
    const numArray = splitBySeperator(expressionString, seperatorArray);
    checkExpressionError(expressionString, seperatorArray, numArray);
    return sumArray(numArray);
}