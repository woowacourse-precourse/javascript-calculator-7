class StringParsing {
    parsing(input) {
        var parsedArray = [];
        const newLineInput = this.newLineProcess(input); // 문자 \n을 실제 개행문자로 바꿔버린다음 매칭
        const customDelimiterPattern = /^\/\/(.)\n(.*)/;
        const customDelimiterFlag = newLineInput.match(customDelimiterPattern);
        var customDelimiter;

        if (!customDelimiterFlag) {
            parsedArray = this.parseDefaultDelimiter(newLineInput);
            customDelimiter = null;
        }
        else {
            customDelimiter = customDelimiterFlag[1];
            const numbers = customDelimiterFlag[2];
            parsedArray = this.parseCustomDelimiter(numbers, customDelimiter); // 최초로 구분자 및 커스텀 구분자로 구분된 parsedArray
        }

        return { parsedArray, customDelimiter };
    }

    newLineProcess(input) { // 개행문자로 바꿔주는 함수
        return input.replace(/\\n/g, "\n");
    }

    parseDefaultDelimiter(input) { // 기본 구분자로 파싱
        var parsedArray = input.split(/[,:]/);
        return parsedArray;
    }

    parseCustomDelimiter(numbers, customDelimiter) { // 커스텀 구분자로만 파싱
        if (customDelimiter === "\\") {
            customDelimiter = "\\\\";
        }
        const regex = new RegExp(`[${customDelimiter}]`);
        var parsedArray = numbers.split(regex);
        return parsedArray;
    }
}

export default StringParsing;