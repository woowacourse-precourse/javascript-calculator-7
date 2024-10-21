/* eslint-disable operator-linebreak */
import { Console } from '@woowacourse/mission-utils';
import splitInputs from './components/split/splitInputs.js';
import splitCustom from './components/split/splitCustom.js';
import validateInputs from './components/validation/validateInputs.js';

class App {
    async run() {
        const inputs = await Console.readLineAsync(
            '문자열 덧셈 계산기를 실행합니다. 계산식을 입력해주세요.\n',
        );
        validateInputs(inputs);
        if (validateInputs(inputs) === true) {
            if (
                inputs.includes('//') === true ||
                inputs.includes('\\n') === true
            ) {
                Console.print(`결과 : ${splitCustom(inputs)}`);
            } else if (
                inputs.includes(':') === true &&
                inputs.includes(',') === true
            ) {
                Console.print(`결과 : ${splitInputs(inputs)}`);
            } else if (typeof Number(inputs) === 'number') {
                Console.print(`결과 : ${inputs}`);
            }
        }
    }
}

export default App;
