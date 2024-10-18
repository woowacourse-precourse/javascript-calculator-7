import { Console } from '@woowacourse/mission-utils';
import User from './User.js';

class Calculator {
    async run() {
        const user = new User();
        const userInput = await user.getUserInput();

        Console.print(userInput);
    }
}

export default Calculator;