import { Console } from '@woowacourse/mission-utils';
import { awareCustomSeprator, extractNumbers } from './calculator.js';

class App {
    async run() {
        let distinct = [',', ':'];

        let input = await Console.readLineAsync(
            '덧셈할 문자열을 입력해 주세요.\n'
        );

        if (input[0] == '/') {
            if (input.slice(0, 2) !== '//' || input.slice(3, 5) !== '\\n') {
                this.throwError('커스텀 구분자 인식 형식을 따라야 합니다.');
            }
            [distinct, input] = awareCustomSeprator(input, distinct);
            if (distinct[distinct.length - 1].length > 1) {
                this.throwError(
                    '커스텀 구분자는 두 문자를 초과할 수 없습니다.'
                );
            }
        }

        const validCharacters = new RegExp(`^[0-9${distinct.join('')}]+$`);
        if (!validCharacters.test(input)) {
            this.throwError('입력에 잘못된 문자가 포함되어 있습니다.');
        }

        const result = extractNumbers(input, distinct);

        Console.print(`결과 : ${result}`);
    }

    throwError(message) {
        throw new Error(`[ERROR] ${message}`);
    }
}

export default App;
