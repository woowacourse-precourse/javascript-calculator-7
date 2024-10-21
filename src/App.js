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
        this.rl.close();
    }

    async getInput(text) {
        return new Promise((resolve) => {
            this.rl.question(text, (input) => {
                resolve(input);
            });
        });
    }
}

export default App;
