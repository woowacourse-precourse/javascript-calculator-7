import readline from "readline";

class App {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    }

    async run() {
        const input = await this.getInput("덧셈할 문자열을 입력해 주세요.");
        const numbers = this.splitInput(input);

        const sum = numbers.reduce((acc, cur) => acc + cur, 0);
        console.log("결과 :", sum);
        this.rl.close();
    }

    async getInput(text) {
        return new Promise((resolve) => {
            this.rl.question(text, (input) => {
                resolve(input);
            });
        });
    }

    splitInput(input) {
        const checkSpecialPattern = /\/\/([^\n]+)\\n/;

        if (input.match(checkSpecialPattern)) {
            const delimiter = input.match(checkSpecialPattern)[1];
            input = input.split("\\n").slice(1)[0];
            return input.split(delimiter).map((item) => Number(item.trim()));
        } else {
            return input.split(/[,:]/).map((item) => Number(item.trim()));
        }
    }
}

export default App;
