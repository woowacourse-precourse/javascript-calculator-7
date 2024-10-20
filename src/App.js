// @ts-nocheck

import { Console } from '@woowacourse/mission-utils';

class App {
    async run() {
        Console.print('덧셈할 문자열을 입력해 주세요.');
        await this.readInput();
    }

    async readInput() {
        try {
            const VALUE = await Console.readLineAsync('');
            Console.print(`결과 : ${VALUE}`);
        } catch (error) {
            Console.print(`[ERROR] : ${error.message}`);
        }
    }
}

export default App;
