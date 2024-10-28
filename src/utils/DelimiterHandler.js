import {RegexPattern} from "../enums/RegexPattern.js";

// 기본 구분자 (쉼표와 콜론)으로 문자열을 분리하는 함수
export function splitByDefaultDelimiter(input){
    return input.split(RegexPattern.DEFAULT_DELIMITERS);
}

// 커스텀 구분자가 있을 때 이를 추출하는 함수
export function extractCustomDelimiter(input) {
    const match = input.match(RegexPattern.CUSTOM_DELIMITERS);
    if (match) {
        let delimiter = match[1];
        if (delimiter.startsWith('[') && delimiter.endsWith(']')) {
            delimiter = delimiter.slice(1, -1);
        }
        return {
            delimiter: delimiter,
            numbers: input.slice(match[0].length),
        };
    }
    return null;
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 커스텀 구분자로 문자열을 분리하는 함수
export function splitByCustomDelimiter(numbers, delimiter){
    const escapedDelimiter = escapeRegExp(delimiter);
    const customDelimiterRegex = new RegExp(escapedDelimiter);
    return numbers.split(customDelimiterRegex);
}
