import { MissionUtils } from '@woowacourse/mission-utils';

class App {
    async run() {
        try {
            const input = await MissionUtils.Console.readLineAsync('덧셉할 문자열을 입력해 주세요.\n');
            const result = calculate(input);

            Console.print(`결과 : ${result}`);
        } catch (e) {
            MissionUtils.Console.print(e.message);
        }
    }
}

export default App;
