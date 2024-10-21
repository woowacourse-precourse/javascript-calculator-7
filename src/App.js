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
        return 0; 
    }
}

export default App;
