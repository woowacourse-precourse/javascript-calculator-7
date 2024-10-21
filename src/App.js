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
        const delimiterRegex = new RegExp(`[${delimiters.join("")}]`);
        const numbers = input.split(delimiterRegex).map(Number);

        return numbers.reduce((sum, num) => sum + num, 0);
    }
}

export default App;
