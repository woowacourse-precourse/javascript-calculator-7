import { getNumber } from "./getNumber.js";
import { validateNumber } from "./validation/validationForCalculate.js";

export const calculate = (input) => {
    let total = 0;
    getNumber(input).forEach((number)=>{
        validateNumber(number);
        let numValue = Number(number);
        total += numValue;
    })

    return total;
}