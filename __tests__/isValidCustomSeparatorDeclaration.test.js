// __tests__/isValidCustomSeparatorDeclaration.test.js

import { isValidCustomSeparatorDeclaration } from '../src/models/validations/isValidCustomSeparatorDeclaration.js';
import { ERROR_MESSAGES } from '../src/constants/constants.js';

describe('isValidCustomSeparatorDeclaration', () => {
	describe('유효하지 않은 입력 데이터 처리', () => {
		test('커스텀 구분자 선언이 없는 일반 문자열인 경우 통과해야한다.', () => {
			const input = '1,2:3';
			expect(isValidCustomSeparatorDeclaration(input)).toBe(true);
		});

		test('커스텀 구분자가 2개 이상 존재한다면 예외를 던져야 한다.', () => {
			const input = '//*\n//*%\n1*2*3';
			expect(() => isValidCustomSeparatorDeclaration(input)).toThrow(
				ERROR_MESSAGES.INVALID_INPUT,
			);
		});

		test('커스텀 구분자가 각기 다른 위치에 2개 이상 존재한다면 예외를 던져야 한다.', () => {
			const input = '//*\n//*%\n1*2*3';
			expect(() => isValidCustomSeparatorDeclaration(input)).toThrow(
				ERROR_MESSAGES.INVALID_INPUT,
			);
		});

		test('빈 문자열을 입력받은 경우 예외를 던져야 한다.', () => {
			const input = '';
			expect(() => isValidCustomSeparatorDeclaration(input)).toThrow(
				ERROR_MESSAGES.INVALID_INPUT,
			);
		});

		test('null 값을 입력받은 경우 예외를 던져야 한다.', () => {
			const input = null;
			expect(() => isValidCustomSeparatorDeclaration(input)).toThrow(
				ERROR_MESSAGES.INVALID_INPUT,
			);
		});

		test('undefined 값을 입력받은 경우 예외를 던져야 한다.', () => {
			const input = undefined;
			expect(() => isValidCustomSeparatorDeclaration(input)).toThrow(
				ERROR_MESSAGES.INVALID_INPUT,
			);
		});

		test('배열을 입력받은 경우 예외를 던져야 한다.', () => {
			const input = ['//*', '1*2*3'];
			expect(() => isValidCustomSeparatorDeclaration(input)).toThrow(
				ERROR_MESSAGES.INVALID_INPUT,
			);
		});
	});

	describe('유효한 입력 데이터 처리', () => {
		test('커스텀 구분자가 1개 존재한다면 true를 반환해야 한다.', () => {
			const input = '//*\n1*2*3';
			expect(isValidCustomSeparatorDeclaration(input)).toBe(true);
		});

		test('특수 문자가 포함된 커스텀 구분자가 1개 존재한다면 true를 반환해야 한다.', () => {
			const input = '//[@]\n1[@]2[@]3';
			expect(isValidCustomSeparatorDeclaration(input)).toBe(true);
		});
		test('커스텀 구분자 선언과 숫자 사이에 공백이 포함된 경우 true를 반환해야 한다.', () => {
			const input = '//* \n1*2*3';
			expect(isValidCustomSeparatorDeclaration(input)).toBe(true);
		});
	});
});
