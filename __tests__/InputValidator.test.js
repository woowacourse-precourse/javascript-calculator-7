// __tests__/InputValidator.test.js

import { InputValidator } from '../src/models/validations/InputValidator.js';
import { isValidNumbers } from '../src/models/validations/isValidNumbers.js';
import { isValidCustomSeparatorDeclaration } from '../src/models/validations/isValidCustomSeparatorDeclaration.js';
import { extractCustomSeparator } from '../src/models/utils/extractCustomSeparator.js';

jest.mock('../src/models/validations/isValidNumbers.js');
jest.mock('../src/models/validations/isValidCustomSeparatorDeclaration.js');
jest.mock('../src/models/utils/extractCustomSeparator.js');

describe('InputValidator 클래스', () => {
	let inputValidator;
	const defaultSeparators = [',', ':'];

	beforeEach(() => {
		inputValidator = new InputValidator('');
		inputValidator.separators = defaultSeparators;
		jest.clearAllMocks();
	});

	describe('생성자', () => {
		test('input과 separator를 초기화해야 합니다', () => {
			const input = '1,2,3';
			const validator = new InputValidator(input);
			expect(validator.input).toBe(input);
			expect(validator.separators).toEqual([',', ':']);
		});
	});

	describe('validateCustomSeparator', () => {
		test('유효한 커스텀 구분자 선언에 대해 true를 반환해야 합니다', () => {
			const input = '//;\n1;2;3';
			isValidCustomSeparatorDeclaration.mockReturnValue(true);
			expect(inputValidator.validateCustomSeparator(input)).toBe(true);
			expect(isValidCustomSeparatorDeclaration).toHaveBeenCalledWith(input);
		});

		test('유효하지 않은 커스텀 구분자 선언에 대해 오류를 발생시켜야 합니다', () => {
			const input = '//\n1;2;3';
			isValidCustomSeparatorDeclaration.mockImplementation(() => {
				throw new Error('유효하지 않은 커스텀 구분자 선언');
			});
			expect(() => inputValidator.validateCustomSeparator(input)).toThrow(
				'유효하지 않은 커스텀 구분자 선언',
			);
			expect(isValidCustomSeparatorDeclaration).toHaveBeenCalledWith(input);
		});
	});

	describe('getCustomSeparator', () => {
		// 메서드 이름 수정
		test('커스텀 구분자가 있을 때 구분자를 추출해야 합니다', () => {
			const input = '//;\n1;2;3';
			extractCustomSeparator.mockReturnValue(';');
			expect(inputValidator.getCustomSeparator(input)).toBe(';');
			expect(extractCustomSeparator).toHaveBeenCalledWith(input);
		});

		test('커스텀 구분자가 없을 때 null을 반환해야 합니다', () => {
			const input = '1,2,3';
			extractCustomSeparator.mockReturnValue(null);
			expect(inputValidator.getCustomSeparator(input)).toBe(null);
			expect(extractCustomSeparator).toHaveBeenCalledWith(input);
		});
	});

	describe('combineSeparators', () => {
		test('기본 구분자와 커스텀 구분자를 결합해야 합니다', () => {
			const customSeparators = [';'];
			const combined = inputValidator.combineSeparators(
				defaultSeparators,
				customSeparators,
			);
			expect(combined).toEqual([',', ':', ';']);
		});

		test('customSeparators가 비어 있을 때 기본 구분자를 반환해야 합니다', () => {
			const customSeparators = [];
			const combined = inputValidator.combineSeparators(
				defaultSeparators,
				customSeparators,
			);
			expect(combined).toEqual([',', ':']);
		});

		test('customSeparators가 null 또는 undefined일 때 기본 구분자를 반환해야 합니다', () => {
			const customSeparators = null;
			const combined = inputValidator.combineSeparators(
				defaultSeparators,
				customSeparators || [],
			);
			expect(combined).toEqual([',', ':']);
		});
	});

	describe('extractNumbersPart', () => {
		test('커스텀 구분자가 있을 때 숫자 부분을 추출해야 합니다', () => {
			const input = '//;\n1;2;3';
			const numbersPart = inputValidator.extractNumbersPart(input);
			expect(numbersPart).toBe('1;2;3');
		});

		test('커스텀 구분자 선언이 없을 때 input을 반환해야 합니다', () => {
			const input = '1,2,3';
			const numbersPart = inputValidator.extractNumbersPart(input);
			expect(numbersPart).toBe('1,2,3');
		});

		test('빈 input을 처리해야 합니다', () => {
			const input = '';
			const numbersPart = inputValidator.extractNumbersPart(input);
			expect(numbersPart).toBe('');
		});
	});

	describe('validateNumbers', () => {
		test('숫자가 유효할 때 true를 반환해야 합니다', () => {
			const numbersPart = '1,2,3';
			const separators = [','];
			isValidNumbers.mockReturnValue(true);
			expect(inputValidator.validateNumbers(numbersPart, separators)).toBe(
				true,
			);
			expect(isValidNumbers).toHaveBeenCalledWith(numbersPart, separators);
		});

		test('숫자가 유효하지 않을 때 false를 반환해야 합니다', () => {
			const numbersPart = '1,a,3';
			const separators = [','];
			isValidNumbers.mockReturnValue(false);
			expect(inputValidator.validateNumbers(numbersPart, separators)).toBe(
				false,
			);
			expect(isValidNumbers).toHaveBeenCalledWith(numbersPart, separators);
		});

		test('validateNumbers가 오류를 발생시킬 때 오류를 발생시켜야 합니다', () => {
			const numbersPart = '1,-2,3';
			const separators = [','];
			isValidNumbers.mockImplementation(() => {
				throw new Error('음수는 허용되지 않습니다');
			});
			expect(() =>
				inputValidator.validateNumbers(numbersPart, separators),
			).toThrow('음수는 허용되지 않습니다');
		});
	});

	describe('통합 동작 테스트', () => {
		test('커스텀 구분자가 있는 경우 전체 검증이 성공해야 합니다', () => {
			const input = '//;\n1;2;3';
			isValidCustomSeparatorDeclaration.mockReturnValue(true);
			extractCustomSeparator.mockReturnValue(';');
			isValidNumbers.mockReturnValue(true);

			expect(inputValidator.validateCustomSeparator(input)).toBe(true);
			const customSeparator = inputValidator.getCustomSeparator(input);
			const combinedSeparators = inputValidator.combineSeparators(
				defaultSeparators,
				[customSeparator],
			);
			const numbersPart = inputValidator.extractNumbersPart(input);
			const areNumbersValid = inputValidator.validateNumbers(
				numbersPart,
				combinedSeparators,
			);

			expect(customSeparator).toBe(';');
			expect(combinedSeparators).toEqual([',', ':', ';']);
			expect(numbersPart).toBe('1;2;3');
			expect(areNumbersValid).toBe(true);
		});

		test('커스텀 구분자가 없고 기본 구분자로 검증이 성공해야 합니다', () => {
			const input = '1,2,3';
			extractCustomSeparator.mockReturnValue(null);
			isValidNumbers.mockReturnValue(true);

			const customSeparator = inputValidator.getCustomSeparator(input);
			const combinedSeparators = inputValidator.combineSeparators(
				defaultSeparators,
				customSeparator ? [customSeparator] : [],
			);
			const numbersPart = inputValidator.extractNumbersPart(input);
			const areNumbersValid = inputValidator.validateNumbers(
				numbersPart,
				combinedSeparators,
			);

			expect(customSeparator).toBe(null);
			expect(combinedSeparators).toEqual([',', ':']);
			expect(numbersPart).toBe('1,2,3');
			expect(areNumbersValid).toBe(true);
		});
	});
});
