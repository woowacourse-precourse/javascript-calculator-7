import { SEPARATORS } from "./constants.js";

export const findSeparator = (input) => {
    if(input.startsWith("//")){
        const START = input.indexOf("//") + 2;
        const END = input.indexOf("\\n");

        if (START === 1 || END === -1) {
            throw new Error("[ERROR] 커스텀 구분자 추가를 위해선 //와 \\n 사이에 추가하고자 하는 문자(공백 제외)를 입력해주세요.");
        }

        const customSeparator = input.slice(START, END);
        SEPARATORS.push(customSeparator);

        if (!isNaN(customSeparator)){
            throw new Error("[ERROR] 커스텀 구분자 추가를 위해선 //와 \\n 사이에 추가하고자 하는 문자(공백 제외)를 입력해주세요.");
        }

        return input.slice(END + 2);
    }

    if (isNaN(input[0])) {
        throw new Error("[ERROR] 양수(정수)를 입력해주세요.");
    }
    return input;
};