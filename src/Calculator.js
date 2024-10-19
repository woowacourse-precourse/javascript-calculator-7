import userInput from "./utils/missionUtils.js";
import validateSeparatorFormat from "./utils/validateSeparatorFormat.js";

class Calculator {
	async runCalculator() {
		try {
			const userOriginalInputValue = await this.getUserInput();
			await validateSeparatorFormat(userOriginalInputValue);
		} catch (error) {
			console.error(error.message);
		}
	}

	async getUserInput() {
		const USER_INPUT = await userInput("덧셈할 문자열을 입력해 주세요.\n");
		return USER_INPUT;
	}
}

export default Calculator;
