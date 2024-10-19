import { getNumber } from "./getNumber.js";

export const calculate = (input) => {
    let total = 0;
    getNumber(input).forEach((number)=>{
        let numValue = Number(number);

        if (numValue < 0) {
            throw new Error("[ERROR] 양수(정수)를 입력해주세요.");
        }

        if(number.length === 0) {
            throw new Error("[ERROR] 구분자 뒤에 더할 숫자를 입력해주세요.")
        }

        if (isNaN(numValue)) {
            throw new Error("[ERROR] 디폴트 구분자(, 또는 :) 또는 커스텀 구분자를 사용해주세요.");
        }

        total += numValue;
    })

    return total;
}