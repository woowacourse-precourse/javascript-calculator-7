import { Console } from '@woowacourse/mission-utils';
import InputParser from './inputParser.js';
import Splitter from './splitter.js';
import Add from './add.js';

class Calculator {

    async calculate() {
        try {
            const inputString = await Console.readLineAsync('덧셈할 문자열을 입력해주세요.\n');
            const [stringNumbers, seperator] = InputParser.getSeperator({ inputText: inputString });

            console.log(stringNumbers, seperator)
            const arrayNumbers = Splitter.splitString({ stringNumbers, seperator });
            Console.print(arrayNumbers)

            const result = Add.sumNumbers({ arrayNumbers });
            
            Console.print(result);

        } catch (error) {
            console.error("에러 발생:", error.message);  // 에러 메시지 출력
            throw error;  // 상위로 에러 전파
        }
    }
}

export default Calculator;