class InputParser {
    constructor(input) {
        this.input = input;
    }

    parse() {
        if (this.input === "") {
            return [0];
        }

        let numbers;
        let delimiterRegex = /[,:]/;
        let numberString;

        const formattedInput = this.input.replace(/\\n/, '\n');  

        if (formattedInput.startsWith('//')) {
            const delimiterEndIndex = formattedInput.indexOf('\n');

            if (delimiterEndIndex !== -1) {
                const delimiterChar = formattedInput.slice(2, delimiterEndIndex);
                const escapedDelimiter = delimiterChar.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                delimiterRegex = new RegExp(`[${escapedDelimiter}]`);
                numberString = formattedInput.slice(delimiterEndIndex + 1);
            } else {
                throw new Error("[ERROR] 잘못된 형식의 입력입니다.");
            }
        } else {
            numberString = formattedInput; // 기본 구분자를 사용할 경우 전체 입력 사용
        }

        numbers = numberString.split(delimiterRegex).map(Number);
        return numbers;
    }
}

export default InputParser;