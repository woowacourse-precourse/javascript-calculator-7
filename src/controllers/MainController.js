import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import { InputValidator } from '../models/validations/InputValidator.js';
import { isEmptyInput } from '../models/validations/isEmptyInput.js';
import { updateSeparators } from '../utils/updateSeparators.js';
import { parsingWithSeparators, parsingNumberPart } from '../utils/parser.js';
import { Calculator } from '../models/Calculator.js';

export class MainController {
	async run() {
		try {
			const rawInput = await InputView.readInput();
			if (isEmptyInput(rawInput)) return OutputView.printResult(0);
			InputValidator.validateStrings(rawInput);
			const separators = updateSeparators(rawInput, [':', ',']);
			const numbers = parseInput(rawInput);
			InputValidator.validateNumbers(numbers);
			const result = Calculator.calculate(numbers, separators);
			OutputView.printResult(result);
		} catch (error) {
			OutputView.printError('[ERROR]');
			throw error;
		}
	}
}

function parseInput(input) {
	const separators = updateSeparators(input, [':', ',']);
	const numberPart = parsingNumberPart(input);
	return parsingWithSeparators(numberPart, separators).map(Number);
}
