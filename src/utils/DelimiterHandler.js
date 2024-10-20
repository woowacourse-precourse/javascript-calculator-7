import {RegexPattern} from "../enums/RegexPattern.js";

// 기본 구분자 (쉼표와 콜론)으로 문자열을 분리하는 함수
export function splitByDefaultDelimiters(input){
    return input.split(RegexPattern.DEFAULT_DELIMITERS);
}

// 커스텀 구분자가 있을 때 이를 추출하는 함수
export function extractCustomDelimeter(input){
    const match = input.match(RegexPattern.CUSTOM_DELIMITERS);
    if(match){
        return{
            delimiter: match[1],
            numbers: input.split('\n')[1],
        };
    }
    return null;
}
