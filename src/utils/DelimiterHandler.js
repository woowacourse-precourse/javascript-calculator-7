import {RegexPattern} from "../enums/RegexPattern.js";

// 기본 구분자 (쉼표와 콜론)으로 문자열을 분리하는 함수
export function splitByDefaultDelimiters(input){
    return input.split(RegexPattern.DEFAULT_DELIMITERS);
}
