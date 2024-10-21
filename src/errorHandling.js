import { ONLY_NUMBER, ONLY_SYMBOL } from './constants'

//배열안에 양수가 아닐때
export const hasNegative = (array)=> {
    for(let i=0; i<array.length; i++ ){
        if(array[i]<0){
            return true
        }
    }
    return false
}

//배열안에 숫자말고 다른 기호가 들어가 있을때 
export const hasInvalidSymbol = (array)=> {
    for(let i=0; i<array.length; i++ ){
        if(ONLY_NUMBER.test(array[i])){
            return true
        }
    }
    return false
}

//입력에 숫자가 없는경우 
export const hasStringNumber = (string)=> {
    return ONLY_NUMBER.test(string);
}

//입력에 기호가 없는경우 
export const hasSymbol = (string)=> {
    return ONLY_SYMBOL.test(string);
}