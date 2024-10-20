// tests/controllers/InputController.test.js

import { InputController } from '../src/controllers/InputController';
import { InputValidator } from '../src/models/validations/InputValidator';
import { Parser } from '../src/models/Parser';
import { extractCustomSeparator } from '../src/models/utils/extractCustomSeparator';

jest.mock('../src/models/validations/InputValidator');
jest.mock('../src/models/Parser');
jest.mock('../src/models/utils/extractCustomSeparator'); // 유틸리티 함수 모킹

describe('InputController Class', () => {
	let inputValidatorMock;
	let parserMock;
	let inputController;

	beforeEach(() => {
		jest.clearAllMocks();

		inputValidatorMock = new InputValidator();
		parserMock = new Parser();

		// Parser의 메서드 모킹
		parserMock.extractNumbersPart = jest.fn();
		parserMock.parse = jest.fn();

		// InputController 인스턴스 생성
		inputController = new InputController('//;\n1;2;3', [',', ':']);
		inputController.inputValidator = inputValidatorMock;
		inputController.parser = parserMock;
	});

	test('사용자 정의 구분자로 입력을 파싱해야 합니다', () => {
		// 모킹된 함수들의 반환값 설정
		inputValidatorMock.validateCustomSeparator.mockReturnValue(true);
		extractCustomSeparator.mockReturnValue(';'); // 유틸리티 함수 모킹
		parserMock.extractNumbersPart.mockReturnValue('1;2;3');
		inputValidatorMock.validateNumbers.mockReturnValue(true);
		parserMock.parse.mockReturnValue(['1', '2', '3']);

		const result = inputController.parseInput();

		// 어설션
		expect(inputValidatorMock.validateCustomSeparator).toHaveBeenCalledWith(
			'//;\n1;2;3',
		);
		expect(extractCustomSeparator).toHaveBeenCalledWith('//;\n1;2;3');
		expect(parserMock.extractNumbersPart).toHaveBeenCalled();
		expect(inputValidatorMock.validateNumbers).toHaveBeenCalledWith('1;2;3', [
			',',
			':',
			';',
		]);
		expect(parserMock.parse).toHaveBeenCalledWith(';');
		expect(result).toEqual(['1', '2', '3']);
	});

	test('사용자 정의 구분자가 없을 때 기본 구분자로 입력을 파싱해야 합니다', () => {
		// InputController를 기본 구분자로 초기화
		inputController = new InputController('1,2:3', [',', ':']);
		inputController.inputValidator = inputValidatorMock;
		inputController.parser = parserMock;

		// 모킹된 함수들의 반환값 설정
		inputValidatorMock.validateCustomSeparator.mockReturnValue(false);
		parserMock.extractNumbersPart.mockReturnValue('1,2:3');
		inputValidatorMock.validateNumbers.mockReturnValue(true);
		parserMock.parse.mockReturnValue(['1', '2', '3']);

		const result = inputController.parseInput();

		// 어설션
		expect(inputValidatorMock.validateCustomSeparator).toHaveBeenCalledWith(
			'1,2:3',
		);
		expect(extractCustomSeparator).not.toHaveBeenCalled();
		expect(parserMock.extractNumbersPart).toHaveBeenCalled();
		expect(inputValidatorMock.validateNumbers).toHaveBeenCalledWith('1,2:3', [
			',',
			':',
		]);
		expect(parserMock.parse).toHaveBeenCalledWith(null);
		expect(result).toEqual(['1', '2', '3']);
	});

	test('빈 입력 시 0을 반환해야 합니다', () => {
		// InputController를 빈 입력으로 초기화
		inputController = new InputController('', [',', ':']);
		inputController.inputValidator = inputValidatorMock;
		inputController.parser = parserMock;

		// 모킹된 함수들의 반환값 설정
		inputValidatorMock.validateCustomSeparator.mockReturnValue(false);
		parserMock.extractNumbersPart.mockReturnValue('');
		inputValidatorMock.validateNumbers.mockReturnValue(true);
		parserMock.parse.mockReturnValue(0);

		const result = inputController.parseInput();

		// 어설션
		expect(inputValidatorMock.validateCustomSeparator).toHaveBeenCalledWith('');
		expect(extractCustomSeparator).not.toHaveBeenCalled();
		expect(parserMock.extractNumbersPart).toHaveBeenCalled();
		expect(inputValidatorMock.validateNumbers).toHaveBeenCalledWith('', [
			',',
			':',
		]);
		expect(parserMock.parse).toHaveBeenCalledWith(null);
		expect(result).toBe(0);
	});
});
