import { ONLY_NUMBER } from './constants'

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
