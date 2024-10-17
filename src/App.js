import { MissionUtils } from '@woowacourse/mission-utils';

class App {
    async run() {
        try {
            const input = await MissionUtils.Console.readLineAsync('덧셉할 문자열을 입력해 주세요.\n');
            const result = this.calculate(input);

            MissionUtils.Console.print(`결과 : ${result}`);
        } catch (e) {
            MissionUtils.Console.print(e.message);
        }
    }

    calculate(input) {
        if (!input) return 0;

        let delimiter = /[,:]/;
        let numbers = input.split(delimiter).map(Number);

        const result = numbers.reduce((sum, num) => sum + num, 0);

        return result;
    }
}

export default App;
