import { Console } from '@woowacourse/mission-utils';
import { awareCustomSeprator, extractNumbers } from './calculator.js';

class App {
    async run() {
        let distinct = [',', ':'];

        let input = await Console.readLineAsync(
            '덧셈할 문자열을 입력해 주세요.\n'
        );

        if (input[0] == '/') {
            [distinct, input] = awareCustomSeprator(input, distinct);
        }

        const result = extractNumbers(input, distinct);

        Console.print(`결과 : ${result}`);
    }
}

export default App;
