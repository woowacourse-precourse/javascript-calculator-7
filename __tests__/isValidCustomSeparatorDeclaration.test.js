import { isValidCustomSeparatorDeclaration } from '../src/models/validations/isValidCustomSeparatorDeclaration.js';
import { expect } from '@jest/globals';
import { ERROR_MESSAGES } from '../src/constants/contants.js';

describe('isValidCustomSeparatorDeclaration', () => {
	test('커스텀 구분자 선언이 없는 경우 true를 반환해야한다.', () => {
		const input = '1,2:3';
		const expected = true;
		expect(isValidCustomSeparatorDeclaration(input)).toEqual(expected);
	});

	test('커스텀 구분자가 1개 존재한다면 true를 반환해야한다.', () => {
		const input = '//*\n1*2*3';
		const expected = true;
		expect(isValidCustomSeparatorDeclaration(input)).toEqual(expected);
	});

	test('커스텀 구분자가 2개 이상 존재한다면 에러를 반환해야한다.', () => {
		const input = '//*\n//%\n1*2*3';
		const expected = ERROR_MESSAGES.INVALID_INPUT;
		expect(() => isValidCustomSeparatorDeclaration(input)).toThrow(expected);
	});

	test('커스텀 구분자가 각기 다른 위치에 2개 이상 존재한다면 에러를 반환해야한다.', () => {
		const input = '//*\n1*2*//*%\n3';
		const expected = ERROR_MESSAGES.INVALID_INPUT;
		expect(() => isValidCustomSeparatorDeclaration(input)).toThrow(expected);
	});

	test('커스텀 구분자 선언부의 시작부만 존재할 경우 에러를 반환해야한다', () => {
		const input = '//*1*2*3';
		const expected = ERROR_MESSAGES.INVALID_INPUT;
		expect(() => isValidCustomSeparatorDeclaration(input)).toThrow(expected);
	});
});
