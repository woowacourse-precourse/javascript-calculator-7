// __tests__/isValidNumbers.test.js
import { isValidNumbers } from '../src/models/validations/isValidNumbers.js';
import { ERROR_MESSAGES } from '../src/constants/contants.js';

describe('isValidNumbers', () => {
	const defaultSeparators = [',', ':'];

	describe('유효하지 않은 입력 데이터 처리', () => {
		test('입력이 문자열이 아닌 경우 예외를 던져야 합니다', () => {
			expect(() => isValidNumbers(123, defaultSeparators)).toThrow(
				ERROR_MESSAGES.INVALID_INPUT,
			);
		});

		test('구분자가 배열이 아닌 경우 예외를 던져야 합니다', () => {
			expect(() => isValidNumbers('1,2,3', ';')).toThrow(
				ERROR_MESSAGES.INVALID_INPUT,
			);
		});

		test('구분자가 null인 경우 예외를 던져야 합니다', () => {
			expect(() => isValidNumbers('1,2,3', null)).toThrow(
				ERROR_MESSAGES.INVALID_INPUT,
			);
		});

		test('아무 입력도 주어지지 않은 경우 예외를 던져야 합니다', () => {
			expect(() => isValidNumbers(undefined, defaultSeparators)).toThrow(
				ERROR_MESSAGES.INVALID_INPUT,
			);
		});
	});

	describe('유효한 입력 데이터 처리', () => {
		test('모든 문자열이 양의 정수 또는 0인 경우 true를 반환해야 한다', () => {
			const input = '0,1,2,3';
			expect(isValidNumbers(input, defaultSeparators)).toBe(true);
		});

		test('문자열에 음수가 포함된 경우 예외를 던져야 한다', () => {
			const input = '-1,2,3';
			expect(() => isValidNumbers(input, defaultSeparators)).toThrow(
				ERROR_MESSAGES.INVALID_NUMBER,
			);
		});

		test('문자열에 소수가 포함된 경우 예외를 던져야 한다', () => {
			const input = '1.5,2,3';
			expect(() => isValidNumbers(input, defaultSeparators)).toThrow(
				ERROR_MESSAGES.INVALID_NUMBER,
			);
		});

		test('문자열에 숫자가 아닌 값이 포함된 경우 예외를 던져야 한다', () => {
			const input = '1,a,3';
			expect(() => isValidNumbers(input, defaultSeparators)).toThrow(
				ERROR_MESSAGES.INVALID_NUMBER,
			);
		});

		test('빈 문자열을 입력받은 경우 true를 반환해야 한다', () => {
			const input = '';
			expect(isValidNumbers(input, defaultSeparators)).toBe(true);
		});

		test('문자열 중 빈 문자열이 있는 경우 예외를 던져야 한다', () => {
			const input = '1,,3';
			expect(() => isValidNumbers(input, defaultSeparators)).toThrow(
				ERROR_MESSAGES.INVALID_NUMBER,
			);
		});

		test('공백이 포함된 경우 예외를 던져야 한다', () => {
			const input = '1, 2,3';
			expect(() => isValidNumbers(input, defaultSeparators)).toThrow(
				ERROR_MESSAGES.INVALID_NUMBER,
			);
		});

		test('여러 구분자를 사용하는 경우 올바르게 동작해야 한다', () => {
			const input = '1,2:3';
			expect(isValidNumbers(input, defaultSeparators)).toBe(true);
		});

		test('구분자에 특수 문자가 포함된 경우 올바르게 처리해야 한다', () => {
			const input = '1*2*3';
			const separators = ['*'];
			expect(isValidNumbers(input, separators)).toBe(true);
		});

		test('NaN 문자열이 포함된 경우 예외를 던져야 한다', () => {
			const input = '1,NaN,3';
			expect(() => isValidNumbers(input, defaultSeparators)).toThrow(
				ERROR_MESSAGES.INVALID_NUMBER,
			);
		});

		test('Infinity 문자열이 포함된 경우 예외를 던져야 한다', () => {
			const input = '1,Infinity,3';
			expect(() => isValidNumbers(input, defaultSeparators)).toThrow(
				ERROR_MESSAGES.INVALID_NUMBER,
			);
		});

		test('16진수 형식의 숫자가 포함된 경우 예외를 던져야 한다', () => {
			const input = '0x1,0x2,0x3';
			expect(() => isValidNumbers(input, defaultSeparators)).toThrow(
				ERROR_MESSAGES.INVALID_NUMBER,
			);
		});

		test('지수 표기법의 숫자가 포함된 경우 예외를 던져야 한다', () => {
			const input = '1e2,2e3,3e4';
			expect(() => isValidNumbers(input, defaultSeparators)).toThrow(
				ERROR_MESSAGES.INVALID_NUMBER,
			);
		});

		test('공백만 있는 경우 true를 반환해야 한다', () => {
			const input = '   ';
			expect(isValidNumbers(input, defaultSeparators)).toBe(true);
		});

		test('숫자와 문자 조합이 포함된 경우 예외를 던져야 한다', () => {
			const input = '1a,2b,3c';
			expect(() => isValidNumbers(input, defaultSeparators)).toThrow(
				ERROR_MESSAGES.INVALID_NUMBER,
			);
		});

		test('탭과 개행 문자가 포함된 경우 올바르게 처리해야 한다', () => {
			const input = '1\t2\n3';
			const separators = ['\t', '\n'];
			expect(isValidNumbers(input, separators)).toBe(true);
		});

		test('구분자가 없는 경우 전체 문자열이 양의 정수 또는 0인지 검사한다', () => {
			const input = '123';
			const separators = [];
			expect(isValidNumbers(input, separators)).toBe(true);
		});

		test('구분자가 없고, 문자열이 숫자가 아닌 경우 예외를 던져야 한다', () => {
			const input = 'abc';
			const separators = [];
			expect(() => isValidNumbers(input, separators)).toThrow(
				ERROR_MESSAGES.INVALID_NUMBER,
			);
		});

		test('유니코드 숫자가 포함된 경우 예외를 던져야 한다', () => {
			const input = '①,②,③';
			expect(() => isValidNumbers(input, defaultSeparators)).toThrow(
				ERROR_MESSAGES.INVALID_NUMBER,
			);
		});
	});
});
