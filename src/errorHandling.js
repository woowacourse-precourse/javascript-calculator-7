// 양수가 아닐때
export const hasNegative = (array)=> {
    for(let i=0; i<array.length; i++ ){
        if(array[i]<0){
            return true
        }
    }
    return false
}

console.log(hasNegative([-1,1,3,4]))

// 다른 기호가 들어가 있을때 (기본)





//다른 기호가 들어가 있을때 (커스텀)

