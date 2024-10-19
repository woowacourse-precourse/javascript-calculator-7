import {MissionUtils} from "@woowacourse/mission-utils";

class App {
    constructor() {
        this.separators = [",", ":"];
    }

    async run() {
        const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
        let inputString = input.toString().trim();

        const {value, separators} = this.parseInput(inputString);
        const result = this.calculate(value, separators);
        return MissionUtils.Console.print(`결과 : ${result}`);
    }

    parseInput(input) {
        if (input[0] === '/' && input[1] === '/') {
            const searchLastWord = input.indexOf('\\n');
            if (searchLastWord > 0) {
                const customSeparator = input.slice(2, searchLastWord);
                const newSeparator = [...this.separators, customSeparator];
                return {
                    value: input.substring(searchLastWord + 2),
                    separators: newSeparator,
                }
            }
        }
        return {
            value: input,
            separators: this.separators,
        }
    }

    calculate(value, separators) {
        if (value === '') {
            return 0;
        }

        const valueArray = [...value];
        let currentNum = '';
        let isPrevSeparator = true;
        let numArrayIndex = 0;
        const numArray = [];

        valueArray.forEach((char, index) => {
            if (!(isNaN(char))) {
                isPrevSeparator = false;
                currentNum += char;
                numArrayIndex++;
                if (index === valueArray.length - 1) {
                    numArray.push(currentNum);
                }
            }
            if (separators.includes(char)) {
                numArray.push(currentNum);
                currentNum = '';
                isPrevSeparator = true;
            } else if (!separators.includes(char) && isNaN(char)) {
                throw Error('[ERROR] 올바르지 않은 연산자를 사용했습니다.');
            }
        });

        return numArray
            .map((str) => parseInt(str, 10))
            .reduce((acc, curr) => acc + curr, 0);
    }
}

export default App;
