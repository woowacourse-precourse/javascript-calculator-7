// tests/models/validations/isEmptyInput.test.js

import { isEmptyInput } from '../src/models/validations/isEmptyInput';

describe('isEmptyInput 함수 테스트', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('빈 문자열을 입력받은 경우 true를 반환해야 한다.', () => {
		const input = '';
		const result = isEmptyInput(input);
		expect(result).toBe(true);
	});

	test('공백 문자열을 입력받은 경우 true를 반환해야 한다.', () => {
		const input = '   ';
		const result = isEmptyInput(input);
		expect(result).toBe(true);
	});

	test('빈 문자열이 아닌 문자열을 입력받은 경우 false를 반환해야 한다.', () => {
		const input = '1,2,3';
		const result = isEmptyInput(input);
		expect(result).toBe(false);
	});

	test('공백과 문자가 혼합된 문자열을 입력받은 경우 false를 반환해야 한다.', () => {
		const input = '  1,2,3  ';
		const result = isEmptyInput(input);
		expect(result).toBe(false);
	});

	// 추가된 테스트 케이스

	test('숫자 입력을 받은 경우 false를 반환해야 한다.', () => {
		const input = '123';
		const result = isEmptyInput(input);
		expect(result).toBe(false);
	});

	test('배열 입력을 받은 경우 false를 반환해야 한다.', () => {
		const input = ['1', '2', '3'];
		const result = isEmptyInput(input);
		expect(result).toBe(false);
	});

	test('객체 입력을 받은 경우 false를 반환해야 한다.', () => {
		const input = { a: 1 };
		const result = isEmptyInput(input);
		expect(result).toBe(false);
	});

	test('숫자형 입력을 받은 경우 false를 반환해야 한다.', () => {
		const input = 0;
		const result = isEmptyInput(input);
		expect(result).toBe(false);
	});

	test('불리언형 입력을 받은 경우 false를 반환해야 한다.', () => {
		const input = true;
		const result = isEmptyInput(input);
		expect(result).toBe(false);
	});

	test('함수형 입력을 받은 경우 false를 반환해야 한다.', () => {
		const input = () => {};
		const result = isEmptyInput(input);
		expect(result).toBe(false);
	});

	test('null을 입력받은 경우 false를 반환해야 한다.', () => {
		const input = null;
		const result = isEmptyInput(input);
		expect(result).toBe(false);
	});

	test('undefined를 입력받은 경우 false를 반환해야 한다.', () => {
		const input = undefined;
		const result = isEmptyInput(input);
		expect(result).toBe(false);
	});
});
