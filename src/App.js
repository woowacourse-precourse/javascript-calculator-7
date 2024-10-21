import readline from 'readline';

class App {
    async run() {
        this.calculate();
    }

    async calculate() {
        const input = await this.readInput();
        try {
            const result = this.addNumbers(input);
            console.log(`결과 : ${result}`);
        } catch (error) {
            console.error(error.message);
        }
    }

    readInput() {
        return new Promise((resolve) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            rl.question("덧셈할 문자열을 입력해 주세요:\n", (input) => {
                rl.close();
                resolve(input);
            });
        });
    }