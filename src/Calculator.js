import { Console } from '@woowacourse/mission-utils';
import InputParser from './inputParser.js';

class Calculator {

    async calculate() {
        try {
            const inputString = await Console.readLineAsync('덧셈할 문자열을 입력해주세요.\n');
            const inputParser = InputParser;
            inputParser.getSeperator({ inputText: inputString });
        } catch (error) {
            console.error("에러 발생:", error.message);  // 에러 메시지 출력
            throw error;  // 상위로 에러 전파
        }
    }
}

export default Calculator;