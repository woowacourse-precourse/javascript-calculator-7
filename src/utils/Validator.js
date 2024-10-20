/*
오류
- 받은값이 음수일때
- 인식할수없는 값이 들어왔을때 (구분자를 추가했는데도 인식할수없는 구분자가 있는 등)
- 커스텀 구분자가 있긴한데 안에 있는게 문자가 아니라 문자들인경우

*/

class Validator {
    validateNumber(number){
        if (isNaN(number) || number < 0) {
            throw new Error("[ERROR] 유효하지 않은 입력값입니다.");
        }
        return number;
    }


    //구분자 없앤 string 배열
    checkArray(numberArray){

        let isNegative = false;
        let isNotNumber = false;


        if (numberArray.length === 1 || numberArray[0] == '') {
            return;
        }

        for(let num = 0; num < numberArray.length; num++){
            if(parseInt(numberArray[num]) < 0)isNegative = true;
            if(numberArray[num] < '0' ||  numberArray[num] > '9')isNotNumber = true;
        }
        if(isNegative)throw new Error("[ERROR] 입력 값 중 음수가 존재합니다.");
        if(isNotNumber)throw new Error("[ERROR] 유효하지 않은 입력 값 입니다.")

    }


}

export default Validator;