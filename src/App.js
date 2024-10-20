import { Console } from "@woowacourse/mission-utils";
import { INPUT_ERROR, PLEASE_INPUT_VALUE, RESULT } from "./constant.js";
import seperatorParser from "./SeperatorParser.js";
import Calculator from "./Calculator.js";
class App {
    async run() {
        try {
            const input = await Console.readLineAsync(PLEASE_INPUT_VALUE);
            const { words, seperator } = seperatorParser.parseSeperator(input);
            const calculator = new Calculator(seperator, words);
            const result = calculator.calculate();
            Console.print(RESULT + result);
        } catch (error) {
            Console.print(error.message);
            throw error;
        }
    }
}

export default App;
