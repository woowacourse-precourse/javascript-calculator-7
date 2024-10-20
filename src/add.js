import { isValidNumbers } from "./validate.js";

const add = {
    async sumNumbers ({ arrayNumbers }) {
        if(await isValidNumbers({ arrayNumbers })){
            let result = 0;
            for(let i = 0; i < arrayNumbers.length; i++){
                result += Number(arrayNumbers[i])
            }

            return result
        }
    }
}

export default add;