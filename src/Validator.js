class Validator {
    constructor(numbers) {
        this.numbers = numbers;
    }

    validate() {
        if (this.numbers.some(num => isNaN(num))) {
            throw new Error("[ERROR] 입력값에 숫자가 아닌 값이 포함되어 있습니다.");
        }
        
        if (this.numbers.some(num => num < 0)) {
            throw new Error("[ERROR] 입력값에 음수는 허용되지 않습니다.");
        }
    }
}

export default Validator;