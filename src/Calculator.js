import { 
	printOutput, 
	userInput 
} from "./utils/missionUtils.js";
import validateSeparatorFormat from "./utils/validateSeparatorFormat.js";
import validatePositiveNumber from "./utils/validatePositiveNumber.js";
import extractCustomSeparator from "./utils/extractCustomSeparator.js";
import splitNumbers from "./utils/splitNumbers.js";
import { getSum } from "./utils/calculate.js";

class Calculator {
	async runCalculator() {
		try {
			const userOriginalInputValue = await this.getUserInput();
			await validateSeparatorFormat(userOriginalInputValue);
			await validatePositiveNumber(userOriginalInputValue);
			const numbers = await this.getNumbers(userOriginalInputValue);
			const sumNumber = await getSum(numbers);
			await this.printOutputNumber(sumNumber);
		} catch (error) {
			console.error(error.message);
			throw new Error(`${error.message}`);
		}
	}

	async getUserInput() {
		const USER_INPUT = await userInput("덧셈할 문자열을 입력해 주세요.\n");
		return USER_INPUT;
	}

	async getNumbers(userInputValue) {
		const { separators, inputWithoutSeparator } = await extractCustomSeparator(userInputValue);
		return splitNumbers(separators, inputWithoutSeparator);
	}

	async printOutputNumber(outputValue) {
		printOutput(`결과 : ${outputValue}`);
	}
}

export default Calculator;
