class Default {
    checkValidation(input) {
        const regExp = new RegExp(/^\d+([,:]\d+)*$/g);

        // 첫 문자나 끝 문자가 숫자가 아니거나
        // 콤마와 세미콜론이 아닌 구분자를 포함하고 있거나
        // 콤마와 세미콜론이 연속적으로 사용될 때
        if (regExp.test(input) === false) {
            return false;
        }

        return true;
        
    }

    calculate(input) {
        const sum = input
            .split(new RegExp(/[,:]/g))
            .map((str) => Number(str))
            .reduce((prev, curr) => prev + curr, 0);

        return sum;
    }
}

export default Default;