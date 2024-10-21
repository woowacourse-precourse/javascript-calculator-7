import {Console} from "@woowacourse/mission-utils";

class App {
    sum = 0;
    customSeparator = null;

    async run() {
        const input = await this.input();
        if (input === "") {
            return this.resultOutput(); // 빈 문자열의 경우 결과 출력
        }
        const argument = this.isCustom(input) ? this.sliceString(input) : input;
        this.calculator(argument);
        this.resultOutput();
    }

    async input() {
        return await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    }

    isCustom(param) {
        const lastIdx = param.indexOf("\\n");
        return param.startsWith("//") && lastIdx !== -1;
    }

    sliceString(param) {
        const lastIdx = param.indexOf("\\n");
        this.customSeparator = param.slice(2, lastIdx);
        this.isCustomSeparatorError(this.customSeparator);
        return param.slice(lastIdx + 2);
    }

    isCustomSeparatorError(param) {
        if (!isNaN(param)) {
            throw new Error("[ERROR]: 에러발생");
        }
    }

    preprocessing(param) {
        const defaultSeparator = /[:,]/g;
        const argument = this.customSeparator
            ? new RegExp(`[${this.customSeparator}:,]`, "g")
            : defaultSeparator;

        const splitArray = param.split(argument);
        return splitArray.map((elem) =>
            this.isError(elem) || Number(elem)
        );
    }

    isError(param) {
        if (Number(param) < 0 || param === "" || isNaN(param.trim())) {
            throw new Error("[ERROR]: 에러발생");
        }
    }

    resultOutput() {
        Console.print(`결과 : ${this.sum}`);
    }

    calculator(param) {
        const numberArray = this.preprocessing(param);
        this.sum = numberArray.reduce((a, b) => a + b, 0);
    }
}

export default App;
