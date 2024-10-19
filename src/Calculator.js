import { INPUT_ERROR } from "./constant";

class Calculator {
    seperator;
    words;
    numbers;

    constructor(seperator, words) {
        this.seperator = seperator;
        this.words = words;
        this.numbers = [];
    }

    calculate() {
        let number = "";
        for (let i = 0, length = this.words.length; i < length; i++) {
            const word = this.words[i];
            if (
                this.words.slice(i, i + this.seperator?.length) ===
                this.seperator
            ) {
                this.numbers.push(number);
                i = i + this.seperator?.length - 1;
                number = "";
                continue;
            }
            if (word === "," || word === ":") {
                this.numbers.push(number);
                number = "";
                continue;
            }
            if (!isNaN(word / 1)) {
                number += word;
                continue;
            }
            throw new Error(INPUT_ERROR);
        }
        this.numbers.push(number);
        return this.numbers.reduce((acc, cur) => acc + +cur, 0);
    }
}

export default Calculator;
