import { Console } from "@woowacourse/mission-utils";
import {
    getSeperatorArray,
    getExpressionString,
    hasExpressionError
} from './utils/index.js';

export async function calculator(){
    const expression = await Console.readLineAsync('입력');
    const seperatorArray = getSeperatorArray(expression);
    const expressionString = getExpressionString(expression);
    if(hasExpressionError(expressionString, seperatorArray)){
        throw new Error('[ERROR] 잘못된 문자열이 포함되어 있습니다.')
   }
    //합 연산 함수 구현
}