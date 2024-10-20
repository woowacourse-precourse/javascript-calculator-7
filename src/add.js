import { isValidNumbers } from "./validate.js";

const add = {
    sumNumbers ({ arrayNumbers }) {
        console.log(arrayNumbers)
        arrayNumbers = arrayNumbers.map(num => Number(num));

        if(isValidNumbers({ arrayNumbers })){
            let result = 0;
            for(let i = 0; i < arrayNumbers.length; i++){
                result += Number(arrayNumbers[i])
            }
            return result
        }
    }
}

export default add;