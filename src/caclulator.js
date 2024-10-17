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
        throw new Error('[ERROR] 구분자, 숫자를 제외한 문자가 포함되어 있습니다.');
   }
    const numArray = splitBySeperator(expressionString, seperatorArray);
    if(numArray.includes("") || numArray.includes("@@")){
        throw new Error('[ERROR] 숫자와 구분자가 교차되는 형식이 아닙니다.');
    }
    return sumArray(numArray);
}