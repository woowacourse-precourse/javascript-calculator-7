// tests/models/Parser.test.js

import { Parser } from '../src/models/Parser.js';
import { extractCustomSeparator } from '../src/models/utils/extractCustomSeparator.js';

jest.mock('../src/models/utils/extractCustomSeparator.js');

describe('Parser 클래스', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('numbersPart가 비어있을 때 0을 반환해야 합니다', () => {
		extractCustomSeparator.mockReturnValue(null);
		const parser = new Parser('', [',', ':']);
		expect(parser.parse()).toBe(0);
	});

	test('구분자가 비어있을 때 단일 숫자가 있는 배열을 반환해야 합니다', () => {
		extractCustomSeparator.mockReturnValue(null);
		const parser = new Parser('123', []);
		expect(parser.parse()).toEqual(['123']);
	});

	test('기본 구분자를 사용하여 numbersPart를 분할해야 합니다', () => {
		extractCustomSeparator.mockReturnValue(null);
		const parser = new Parser('1,2:3', [',', ':']);
		expect(parser.parse()).toEqual(['1', '2', '3']);
	});

	test('제공된 사용자 정의 구분자를 포함해야 합니다', () => {
		const parser = new Parser('1;2;3', [',', ':']);
		parser.combineSeparators = jest.fn().mockReturnValue([',', ':', ';']);
		parser.extractNumbersPart = jest.fn().mockReturnValue('1;2;3');
		expect(parser.parse(';')).toEqual(['1', '2', '3']);
	});

	test('구분자에서 특수 정규식 문자를 이스케이프해야 합니다', () => {
		const parser = new Parser('1*2*3', [',', ':']);
		parser.combineSeparators = jest.fn().mockReturnValue([',', ':', '*']);
		parser.extractNumbersPart = jest.fn().mockReturnValue('1*2*3');
		expect(parser.parse('*')).toEqual(['1', '2', '3']);
	});
});
