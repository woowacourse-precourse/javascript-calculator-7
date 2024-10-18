
class Validator {
    validateNumber(number){
        if (isNaN(number) || number < 0) {
            throw new Error("[ERROR] 유효하지 않은 입력값입니다.");
        }
        return number;
    }
}

export default Validator;