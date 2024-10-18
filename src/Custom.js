class Custom {
    checkValidation(input) {
        const divider = this.getDivider(input);
        let dividerRegExp = "";

        for (let i = 0; i < divider.length; i++) {
            dividerRegExp += `\\` + divider[i];
        }

        const regExp = new RegExp(`^\\/\\/${dividerRegExp}\\\\n\\d+(${dividerRegExp}\\d+)*$`, 'g');

        // 첫 시작이 //특수문자\n 가 아니거나
        // 끝 문자가 숫자가 아니거나
        // 특수문자 구분자가 아닌 다른 구분자가 있을 때
        if (regExp.test(input) === false) {
            return false;   
        }

        return true;
    }

    calculate(input) {
        const divider = this.getDivider(input);
        const sum = input
            .slice(divider.length + 4)
            .split(divider)
            .map((str) => Number(str))
            .reduce((prev, curr) => prev + curr, 0);

        return sum;
    }

    getDivider(input) {
        return input.substring(2, input.search(/\\n/));
    }
}

export default Custom;