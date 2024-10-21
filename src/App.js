import readline from 'readline';

class App {
    constructor() {
        this.RL = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    }

    async run() {
        this.RL.question('덧셈할 문자열을 입력해주세요: ', (line) => {
            try {
                const result = this.calculate(line);
                console.log(`결과: ${result}`);
            } catch (error) {
                console.error(error.message);
            } finally {
                this.RL.close();
            }
        });
    }


}

const app = new App();
app.run();
