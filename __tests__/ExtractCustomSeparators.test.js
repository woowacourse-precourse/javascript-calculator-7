import { extractCustomSeparator } from '../src/models/utils/extractCustomSeparator';
import { expect } from '@jest/globals';

describe('ExtractCustomSeparator', () => {
	test('커스텀 구분자가 없는 경우 null을 반환해야한다.', () => {
		const input = '1,2:3';
		const expected = null;
		expect(extractCustomSeparator(input)).toEqual(expected);
	});

	test('인풋 자체가 빈 문자열일 시 null을 반환해야한다.', () => {
		const input = '';
		const expected = null;
		expect(extractCustomSeparator(input)).toEqual(expected);
	});

	test('기본 구분자만 사용하는 입력 시 null을 반환해야한다.', () => {
		const input1 = '1,2,3';
		const input2 = '1:2:3';
		const input3 = '1,2:3,4:5';
		expect(extractCustomSeparator(input1)).toBe(null);
		expect(extractCustomSeparator(input2)).toBe(null);
		expect(extractCustomSeparator(input3)).toBe(null);
	});

	test('커스텀 구분자 선언 형식이 정확하지 않을 경우 null을 반환해야한다.', () => {
		const input1 = '//1,2,3';
		const input2 = '/1\n:2:3';
		const input3 = '1\n,2:3,4:5';
		expect(extractCustomSeparator(input1)).toBe(null);
		expect(extractCustomSeparator(input2)).toBe(null);
		expect(extractCustomSeparator(input3)).toBe(null);
	});

	test('커스텀 구분자가 있는 경우 해당 커스텀 구분자를 리턴해야한다.', () => {
		const input = '//=\n1,2:3';
		const expected = '=';
		expect(extractCustomSeparator(input)).toEqual(expected);
	});

	test('커스텀 구분자의 길이가 1 이상이어도 추출할 수 있어야한다.', () => {
		const input = '//***\n1;2;3';
		const expected = '***';
		expect(extractCustomSeparator(input)).toEqual(expected);
	});

	test('커스텀 구분자가 이모지여도 추출할 수 있어야한다.', () => {
		const input = '//😊\n1😊2😊3';
		const expected = '😊';
		expect(extractCustomSeparator(input)).toBe(expected);
	});

	test('커스텀 구분자 선언만 있고 실제 숫자가 없어도 커스텀 구분자를 리턴할 수 있어야한다.', () => {
		const input = '//;\n';
		const expected = ';';
		expect(extractCustomSeparator(input)).toEqual(expected);
	});

	test('커스텀 구분자는 공백일 수 있어야한다.', () => {
		const input = '// \n';
		const expected = ' ';
		expect(extractCustomSeparator(input)).toEqual(expected);
	});

	test('커스텀 구분자 선언이 중간에 있는 경우 null을 반환한다.', () => {
		const input = '1,2\n//;\n3;4';
		expect(extractCustomSeparator(input)).toBe(null);
	});

	test('커스텀 구분자 선언이 없지만 //로 시작하는 경우 null을 반환한다.', () => {
		const input = '//1,2,3';
		expect(extractCustomSeparator(input)).toBe(null);
	});

	test('커스텀 구분자가 빈 문자열인 경우 빈 문자열을 반환한다.', () => {
		const input = '//\n1,2,3';
		const expected = '';
		expect(extractCustomSeparator(input)).toBe(expected);
	});
});
