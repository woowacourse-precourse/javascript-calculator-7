import userInput from "./utils/missionUtils.js";
import validateSeparatorFormat from "./utils/validateSeparatorFormat.js";
import validatePositiveNumber from "./utils/validatePositiveNumber.js";
import { getSum } from "./utils/calculate.js";

class Calculator {
	async runCalculator() {
		try {
			const userOriginalInputValue = await this.getUserInput();
			await validateSeparatorFormat(userOriginalInputValue);
			await validatePositiveNumber(userOriginalInputValue);
			const numbers = await this.getNumbers(userOriginalInputValue);
			const sumNumber = await getSum(numbers);
		} catch (error) {
			console.error(error.message);
		}
	}

	async getUserInput() {
		const USER_INPUT = await userInput("덧셈할 문자열을 입력해 주세요.\n");
		return USER_INPUT;
	}

	async getNumbers(userInputValue) {
		const customDelimiterPattern = /^\/\/(.)\\n/;
		let separators = [",", ":"];

		const customDelimiterMatch = userInputValue.match(customDelimiterPattern);
		if (customDelimiterMatch) {
			separators.push(customDelimiterMatch[1]);
			userInputValue = userInputValue.substring(customDelimiterMatch[0].length);
		}

		const delimiterRegex = new RegExp(`[${separators.join("")}]`);
		const numbers = userInputValue.split(delimiterRegex).filter(Boolean);

		return numbers;
	}
}

export default Calculator;
