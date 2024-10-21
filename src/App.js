import { MissionUtils } from "@woowacourse/mission-utils";

class App {
    async run() {
        try {
            const input = await this.getInput();
            const result = this.add(input);
            MissionUtils.Console.print(`결과 : ${result}`);
        } catch (error) {
            MissionUtils.Console.print(error.message);
            throw error;
        }
    }

    async getInput() {
        return await MissionUtils.Console.readLineAsync();
    }

    add(input) {
        if (input === "") return 0;

        let delimiters = [",", ":"]; 
        let numbersStr = input;

        if (input.startsWith("//")) {
            const customDelimiterMatch = input.match(/^\/\/(.)\\n(.*)/);
            if (customDelimiterMatch) {
                delimiters.push(customDelimiterMatch[1]);
                numbersStr = customDelimiterMatch[2];
            } else {
                throw new Error("[ERROR] 잘못된 구분자 형식입니다.");
            }
        }

        const delimiterRegex = new RegExp(`[${delimiters.join("")}]`);
        const numbers = numbersStr.split(delimiterRegex).map(Number);

        const negatives = numbers.filter(num => num < 0);
        if (negatives.length > 0) {
            throw new Error("[ERROR] 음수사용은 불가능합니다.: " + negatives.join(", "));
        }

        if (numbers.some(isNaN)) {
            throw new Error("[ERROR] 숫자 형식이 잘못되었습니다.");
        }

        return numbers.reduce((sum, num) => sum + num, 0); 
    }
}

export default App;
