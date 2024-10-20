import { INVALID_SYMBOLS } from './constants'

//배열안에 양수가 아닐때
export const hasNegative = (array)=> {
    for(let i=0; i<array.length; i++ ){
        if(array[i]<0){
            return true
        }
    }
    return false
}

//배열안에 기호가 들어가 있을때 

export const hasInvalidSymbol = (array)=> {
    for(let i=0; i<array.length; i++ ){
        if(INVALID_SYMBOLS.test(array)){
            return true
        }
    }
    return false
}
