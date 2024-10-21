// 테스트 파일 예: MainController.test.js

import InputView from '../src/views/InputView.js';
import OutputView from '../src/views/OutputView.js';
import { InputValidator } from '../src/models/validations/InputValidator.js';
import { isEmptyInput } from '../src/models/validations/isEmptyInput.js';
import { updateSeparators } from '../src/utils/updateSeparators.js';
import {
	parsingWithSeparators,
	parsingNumberPart,
} from '../src/utils/parser.js';
import { Calculator } from '../src/models/Calculator.js';
import { MainController } from '../src/controllers/MainController.js';

jest.mock('../src/views/InputView.js');
jest.mock('../src/views/OutputView.js');
jest.mock('../src/models/validations/InputValidator.js');
jest.mock('../src/models/validations/isEmptyInput.js');
jest.mock('../src/utils/updateSeparators.js');
jest.mock('../src/utils/parser.js');
jest.mock('../src/models/Calculator.js');

describe('MainController 클래스', () => {
	let mainController;

	beforeEach(() => {
		jest.clearAllMocks();
		mainController = new MainController();
	});

	test('유효한 입력을 처리하고 계산 결과를 출력해야 합니다', async () => {
		const rawInput = '1,2,3';
		const parsedNumberStrings = ['1', '2', '3'];
		const parsedNumbers = [1, 2, 3];
		const separators = [','];
		const calculationResult = 6;

		InputView.readInput.mockResolvedValue(rawInput);
		isEmptyInput.mockReturnValue(false);
		InputValidator.validateStrings.mockImplementation(() => {});
		parsingNumberPart.mockReturnValue('1,2,3');
		updateSeparators.mockReturnValue(separators);
		parsingWithSeparators.mockReturnValue(parsedNumberStrings);
		InputValidator.validateNumbers.mockImplementation(() => {});
		Calculator.calculate.mockReturnValue(calculationResult);

		await mainController.run();

		expect(InputView.readInput).toHaveBeenCalled();
		expect(isEmptyInput).toHaveBeenCalledWith(rawInput);
		expect(InputValidator.validateStrings).toHaveBeenCalledWith(rawInput);
		expect(parsingNumberPart).toHaveBeenCalledWith(rawInput);
		expect(updateSeparators).toHaveBeenCalledWith(rawInput, [':', ',']);
		expect(parsingWithSeparators).toHaveBeenCalledWith('1,2,3', separators);
		expect(InputValidator.validateNumbers).toHaveBeenCalledWith(parsedNumbers);
		expect(Calculator.calculate).toHaveBeenCalledWith(
			parsedNumbers,
			separators,
		);
		expect(OutputView.printResult).toHaveBeenCalledWith(calculationResult);
	});

	test('빈 입력 시 0을 출력해야 합니다', async () => {
		const rawInput = '';
		isEmptyInput.mockReturnValue(true);

		InputView.readInput.mockResolvedValue(rawInput);

		await mainController.run();

		expect(InputView.readInput).toHaveBeenCalled();
		expect(isEmptyInput).toHaveBeenCalledWith(rawInput);
		expect(OutputView.printResult).toHaveBeenCalledWith(0);
		expect(InputValidator.validateStrings).not.toHaveBeenCalled();
		expect(parsingNumberPart).not.toHaveBeenCalled();
		expect(updateSeparators).not.toHaveBeenCalled();
		expect(parsingWithSeparators).not.toHaveBeenCalled();
		expect(InputValidator.validateNumbers).not.toHaveBeenCalled();
		expect(Calculator.calculate).not.toHaveBeenCalled();
	});

	test('입력 검증 오류 시 에러를 출력하고 예외를 던져야 합니다', async () => {
		const rawInput = '1,2,3';
		InputView.readInput.mockResolvedValue(rawInput);
		isEmptyInput.mockReturnValue(false);
		InputValidator.validateStrings.mockImplementation(() => {
			throw new Error('Invalid input');
		});

		await expect(mainController.run()).rejects.toThrow('Invalid input');
		expect(InputView.readInput).toHaveBeenCalled();
		expect(isEmptyInput).toHaveBeenCalledWith(rawInput);
		expect(InputValidator.validateStrings).toHaveBeenCalledWith(rawInput);
		expect(OutputView.printError).toHaveBeenCalledWith('[ERROR]');
		expect(parsingNumberPart).not.toHaveBeenCalled();
		expect(updateSeparators).not.toHaveBeenCalled();
		expect(parsingWithSeparators).not.toHaveBeenCalled();
		expect(InputValidator.validateNumbers).not.toHaveBeenCalled();
		expect(Calculator.calculate).not.toHaveBeenCalled();
	});

	test('계산기 오류 시 에러를 출력하고 예외를 던져야 합니다', async () => {
		const rawInput = '1,2,3';
		const parsedNumberStrings = ['1', '2', '3'];
		const parsedNumbers = [1, 2, 3];
		const separators = [','];

		InputView.readInput.mockResolvedValue(rawInput);
		isEmptyInput.mockReturnValue(false);
		InputValidator.validateStrings.mockImplementation(() => {});
		parsingNumberPart.mockReturnValue('1,2,3');
		updateSeparators.mockReturnValue(separators);
		parsingWithSeparators.mockReturnValue(parsedNumberStrings);
		InputValidator.validateNumbers.mockImplementation(() => {});
		Calculator.calculate.mockImplementation(() => {
			throw new Error('Calculation error');
		});

		await expect(mainController.run()).rejects.toThrow('Calculation error');
		expect(InputView.readInput).toHaveBeenCalled();
		expect(isEmptyInput).toHaveBeenCalledWith(rawInput);
		expect(InputValidator.validateStrings).toHaveBeenCalledWith(rawInput);
		expect(parsingNumberPart).toHaveBeenCalledWith(rawInput);
		expect(updateSeparators).toHaveBeenCalledWith(rawInput, [':', ',']);
		expect(parsingWithSeparators).toHaveBeenCalledWith('1,2,3', separators);
		expect(InputValidator.validateNumbers).toHaveBeenCalledWith(parsedNumbers);
		expect(Calculator.calculate).toHaveBeenCalledWith(
			parsedNumbers,
			separators,
		);
		expect(OutputView.printError).toHaveBeenCalledWith('[ERROR]');
	});

	test('잘못된 입력 형식 처리', async () => {
		const rawInput = '1,2,three';
		InputView.readInput.mockResolvedValue(rawInput);
		isEmptyInput.mockReturnValue(false);
		InputValidator.validateStrings.mockImplementation(() => {
			throw new Error('Invalid format');
		});

		await expect(mainController.run()).rejects.toThrow('Invalid format');
		expect(InputView.readInput).toHaveBeenCalled();
		expect(isEmptyInput).toHaveBeenCalledWith(rawInput);
		expect(InputValidator.validateStrings).toHaveBeenCalledWith(rawInput);
		expect(OutputView.printError).toHaveBeenCalledWith('[ERROR]');
		expect(parsingNumberPart).not.toHaveBeenCalled();
		expect(updateSeparators).not.toHaveBeenCalled();
		expect(parsingWithSeparators).not.toHaveBeenCalled();
		expect(InputValidator.validateNumbers).not.toHaveBeenCalled();
		expect(Calculator.calculate).not.toHaveBeenCalled();
	});

	test('음수 입력 처리', async () => {
		const rawInput = '1,-2,3';
		const parsedNumberStrings = ['1', '-2', '3'];
		const parsedNumbers = [1, -2, 3];
		const separators = [','];

		InputView.readInput.mockResolvedValue(rawInput);
		isEmptyInput.mockReturnValue(false);
		InputValidator.validateStrings.mockImplementation(() => {});
		parsingNumberPart.mockReturnValue('1,-2,3');
		updateSeparators.mockReturnValue(separators);
		parsingWithSeparators.mockReturnValue(parsedNumberStrings);
		InputValidator.validateNumbers.mockImplementation(() => {
			throw new Error('Negative numbers not allowed');
		});

		await expect(mainController.run()).rejects.toThrow(
			'Negative numbers not allowed',
		);
		expect(InputView.readInput).toHaveBeenCalled();
		expect(isEmptyInput).toHaveBeenCalledWith(rawInput);
		expect(InputValidator.validateStrings).toHaveBeenCalledWith(rawInput);
		expect(parsingNumberPart).toHaveBeenCalledWith(rawInput);
		expect(updateSeparators).toHaveBeenCalledWith(rawInput, [':', ',']);
		expect(parsingWithSeparators).toHaveBeenCalledWith('1,-2,3', separators);
		expect(InputValidator.validateNumbers).toHaveBeenCalledWith(parsedNumbers);
		expect(Calculator.calculate).not.toHaveBeenCalled();
		expect(OutputView.printError).toHaveBeenCalledWith('[ERROR]');
	});

	test('다른 구분자 처리', async () => {
		const rawInput = '//;\n1;2;3';
		const parsedNumberStrings = ['1', '2', '3'];
		const parsedNumbers = [1, 2, 3];
		const separators = [';'];
		const calculationResult = 6;

		InputView.readInput.mockResolvedValue(rawInput);
		isEmptyInput.mockReturnValue(false);
		InputValidator.validateStrings.mockImplementation(() => {});
		parsingNumberPart.mockReturnValue('1;2;3');
		updateSeparators.mockReturnValue(separators);
		parsingWithSeparators.mockReturnValue(parsedNumberStrings);
		InputValidator.validateNumbers.mockImplementation(() => {});
		Calculator.calculate.mockReturnValue(calculationResult);

		await mainController.run();

		expect(InputView.readInput).toHaveBeenCalled();
		expect(isEmptyInput).toHaveBeenCalledWith(rawInput);
		expect(InputValidator.validateStrings).toHaveBeenCalledWith(rawInput);
		expect(parsingNumberPart).toHaveBeenCalledWith(rawInput);
		expect(updateSeparators).toHaveBeenCalledWith(rawInput, [':', ',']);
		expect(parsingWithSeparators).toHaveBeenCalledWith('1;2;3', separators);
		expect(InputValidator.validateNumbers).toHaveBeenCalledWith(parsedNumbers);
		expect(Calculator.calculate).toHaveBeenCalledWith(
			parsedNumbers,
			separators,
		);
		expect(OutputView.printResult).toHaveBeenCalledWith(calculationResult);
	});

	test('매우 큰 숫자 처리', async () => {
		const rawInput = '1000,2000,3000';
		const parsedNumberStrings = ['1000', '2000', '3000'];
		const parsedNumbers = [1000, 2000, 3000];
		const separators = [','];
		const calculationResult = 6000;

		InputView.readInput.mockResolvedValue(rawInput);
		isEmptyInput.mockReturnValue(false);
		InputValidator.validateStrings.mockImplementation(() => {});
		parsingNumberPart.mockReturnValue('1000,2000,3000');
		updateSeparators.mockReturnValue(separators);
		parsingWithSeparators.mockReturnValue(parsedNumberStrings);
		InputValidator.validateNumbers.mockImplementation(() => {});
		Calculator.calculate.mockReturnValue(calculationResult);

		await mainController.run();

		expect(InputView.readInput).toHaveBeenCalled();
		expect(isEmptyInput).toHaveBeenCalledWith(rawInput);
		expect(InputValidator.validateStrings).toHaveBeenCalledWith(rawInput);
		expect(parsingNumberPart).toHaveBeenCalledWith(rawInput);
		expect(updateSeparators).toHaveBeenCalledWith(rawInput, [':', ',']);
		expect(parsingWithSeparators).toHaveBeenCalledWith(
			'1000,2000,3000',
			separators,
		);
		expect(InputValidator.validateNumbers).toHaveBeenCalledWith(parsedNumbers);
		expect(Calculator.calculate).toHaveBeenCalledWith(
			parsedNumbers,
			separators,
		);
		expect(OutputView.printResult).toHaveBeenCalledWith(calculationResult);
	});

	test('비숫자 입력 처리', async () => {
		const rawInput = '1,a,3';
		const parsedNumberStrings = ['1', 'a', '3'];
		const parsedNumbers = [1, NaN, 3]; // 'a' will be converted to NaN
		const separators = [','];

		InputView.readInput.mockResolvedValue(rawInput);
		isEmptyInput.mockReturnValue(false);
		InputValidator.validateStrings.mockImplementation(() => {});
		parsingNumberPart.mockReturnValue('1,a,3');
		updateSeparators.mockReturnValue(separators);
		parsingWithSeparators.mockReturnValue(parsedNumberStrings);
		InputValidator.validateNumbers.mockImplementation(() => {
			throw new Error('Non-numeric input detected');
		});

		await expect(mainController.run()).rejects.toThrow(
			'Non-numeric input detected',
		);
		expect(InputView.readInput).toHaveBeenCalled();
		expect(isEmptyInput).toHaveBeenCalledWith(rawInput);
		expect(InputValidator.validateStrings).toHaveBeenCalledWith(rawInput);
		expect(parsingNumberPart).toHaveBeenCalledWith(rawInput);
		expect(updateSeparators).toHaveBeenCalledWith(rawInput, [':', ',']);
		expect(parsingWithSeparators).toHaveBeenCalledWith('1,a,3', separators);
		expect(InputValidator.validateNumbers).toHaveBeenCalledWith(parsedNumbers);
		expect(Calculator.calculate).not.toHaveBeenCalled();
		expect(OutputView.printError).toHaveBeenCalledWith('[ERROR]');
	});
});
