import { Console } from "@woowacourse/mission-utils";
import {initSeperatorArray, getSeperatorArray, getExpressionString} from './utils/index.js';
export async function calculator(){
    //문자열 에러 처리 함수 구현
    const expression = await Console.readLineAsync('입력');
    const defaultSeperatorArray = initSeperatorArray();
    const seperatorArray = getSeperatorArray(expression, defaultSeperatorArray);
    const expressionString = getExpressionString(expression);
    //합 연산 함수 구현
}