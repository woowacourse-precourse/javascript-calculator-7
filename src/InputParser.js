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

        if (this.input.startsWith('//')) {
            const delimiterEndIndex = this.input.indexOf('\n');
            if (delimiterEndIndex !== -1) { // 줄바꿈 문자가 있는 경우
                const delimiterChar = this.input[2]; 
                const escapedDelimiterRegex = delimiterChar.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                delimiterRegex = new RegExp(`[${escapedDelimiterRegex}]`);
                numberString = this.input.slice(delimiterEndIndex + 1); // 줄바꿈 이후의 문자열
            } else {

                numberString = this.input.slice(5); // 입력 문자열에서 커스텀 구분자를 제외한 나머지 부분
            }
        } else {
            numberString = this.input; // 기본 구분자를 사용할 경우 전체 입력 사용
        }

        numbers = numberString.split(delimiterRegex).map(Number);

        return numbers;
    }
}

export default InputParser;