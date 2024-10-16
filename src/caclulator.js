import { Console } from "@woowacourse/mission-utils";
import {
    getSeperatorArray,
    getExpressionString,
    hasExpressionError,
    splitBySeperator,
    sumArray,
} from './utils/index.js';

export async function calculator(){
    const expression = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
    const seperatorArray = getSeperatorArray(expression);
    const expressionString = getExpressionString(expression);
    if(hasExpressionError(expressionString, seperatorArray)){
        throw new Error('[ERROR]')
   }
    const numArray = splitBySeperator(expressionString, seperatorArray);
    return sumArray(numArray);
}