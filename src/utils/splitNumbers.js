import { VALIDATES } from "../constants/messages.js";
async function splitNumbers(input, delimiters) {

    const numbers = [];
    const index = input.indexOf("\n");
    const sliceInput = index === -1 ? input : input.slice(index + 1);
    let tempNumber = '';
    for (let char of sliceInput) {
        // 현재 문자가 구분자 중 하나인지 확인
        if (delimiters.includes(char)) {
            // 구분자일 경우 현재 숫자가 비어있지 않으면 배열에 추가
            if (tempNumber) {
                numbers.push(tempNumber);
                tempNumber = ''; //초기화
            }
        } 
        else {
            tempNumber += char;// 구분자가 아닐 경우 현재 숫자에 추가
        }
    }
    // 남아 있는 문자 있을 경우 추가
    if (tempNumber) {
        numbers.push(tempNumber);
    }

    // 숫자로 변환하여 배열로 반환
    const result=  numbers.map((numstr)=>{
        const num = Number(numstr);
        if(isNaN(num)){
            throw new Error(VALIDATES.IS_NAN);
        }
        if(num <0)
        {
            throw new Error(VALIDATES.MINUS);
        }
        return num;
    });
    return result;
}

export default splitNumbers;