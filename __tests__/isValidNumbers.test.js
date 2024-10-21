// isValidNumbers.test.js

import { isValidNumbers } from '../src/models/validations/isValidNumbers.js';
import { ERROR_MESSAGES } from '../src/constants/constants.js';

/**
 * 입력값을 안전하게 문자열로 변환하는 헬퍼 함수
 * JSON.stringify가 실패할 경우, 해당 타입에 맞게 문자열로 변환
 */
const safeStringify = (input) => {
	if (typeof input === 'bigint') {
		return `${input}n`;
	}
	if (typeof input === 'function') {
		return input.toString();
	}
	if (typeof input === 'symbol') {
		return input.toString();
	}
	try {
		return JSON.stringify(input);
	} catch (e) {
		return String(input);
	}
};

describe('isValidNumbers 함수 테스트', () => {
	describe('유효한 입력', () => {
		const validInputs = [
			{ input: [], description: '빈 배열' },
			{ input: ['1', '2', '3'], description: '모든 요소가 숫자 문자열인 배열' },
			{ input: [1, 2, 3], description: '모든 요소가 숫자인 배열' },
			{ input: ['0', '00', '000'], description: '0을 포함한 숫자 문자열 배열' },
			{ input: [0, 0, 0], description: '0으로만 구성된 숫자 배열' },
			{ input: ['1', 2, '3', 0], description: '문자열과 숫자가 혼합된 배열' },
			{ input: ['1234567890'], description: '매우 큰 숫자 문자열' },
			{
				input: [Number.MAX_SAFE_INTEGER],
				description: 'JavaScript 최대 안전 정수',
			},
			{ input: ['99999999999999999999'], description: '매우 큰 숫자 문자열' },
			{
				input: ['001', '002', '003'],
				description: '선행 0이 있는 숫자 문자열',
			},
			{ input: ['0000'], description: '모든 문자가 0인 숫자 문자열' },
			{ input: [0], description: '단일 0 숫자' },
			{ input: ['0'], description: '단일 0 문자열' },
		];

		validInputs.forEach(({ input, description }) => {
			test(`유효한 입력: ${description}`, () => {
				expect(isValidNumbers(input)).toBe(true);
			});
		});
	});

	describe('유효하지 않은 입력: 배열이 아닌 경우', () => {
		const invalidInputs = [
			{ value: undefined, type: 'undefined' },
			{ value: null, type: 'null' },
			{ value: '1,2,3', type: 'string' },
			{ value: 123, type: 'number' },
			{ value: 0, type: 'number' },
			{ value: -1, type: 'number' },
			{ value: 3.14, type: 'number' },
			{ value: true, type: 'boolean' },
			{ value: false, type: 'boolean' },
			{ value: {}, type: 'object' },
			{ value: { a: 1 }, type: 'object' },
			{ value: () => {}, type: 'function' },
			{ value: Symbol('sym'), type: 'symbol' },
			{ value: BigInt(10), type: 'bigint' },
			{ value: new Date(), type: 'Date object' },
		];

		invalidInputs.forEach(({ value, type }) => {
			test(`입력값 타입이 ${type}일 때 에러가 발생해야 한다.`, () => {
				expect(() => isValidNumbers(value)).toThrow(Error);
				expect(() => isValidNumbers(value)).toThrow(
					ERROR_MESSAGES.INVALID_INPUT,
				);
			});
		});
	});

	describe('유효하지 않은 입력: 배열이지만 요소가 유효하지 않은 경우', () => {
		const invalidElementInputs = [
			{
				input: ['1', '2', 'three'],
				description: '문자열 중 하나가 숫자가 아닌 문자열',
				errorMessage: '[ERROR]',
			},
			{
				input: [1, 2, -3],
				description: '숫자 중 하나가 음수',
				errorMessage: '[ERROR]',
			},
			{
				input: ['1', 2, 3.5],
				description: '숫자 중 하나가 소수',
				errorMessage: '[ERROR]',
			},
			{
				input: ['1', true, '3'],
				description: '숫자 중 하나가 불리언',
				errorMessage: '[ERROR]',
			},
			{
				input: ['1', {}, '3'],
				description: '숫자 중 하나가 객체',
				errorMessage: '[ERROR]',
			},
			{
				input: ['1', null, '3'],
				description: '숫자 중 하나가 null',
				errorMessage: '[ERROR]',
			},
			{
				input: ['1', undefined, '3'],
				description: '숫자 중 하나가 undefined',
				errorMessage: '[ERROR]',
			},
			{
				input: ['1', NaN, '3'],
				description: '숫자 중 하나가 NaN',
				errorMessage: '[ERROR]',
			},
			{
				input: ['1', Infinity, '3'],
				description: '숫자 중 하나가 Infinity',
				errorMessage: '[ERROR]',
			},
			{
				input: ['1', -Infinity, '3'],
				description: '숫자 중 하나가 -Infinity',
				errorMessage: '[ERROR]',
			},
			{
				input: ['1', () => {}, '3'],
				description: '숫자 중 하나가 함수',
				errorMessage: '[ERROR]',
			},
			{
				input: ['1', Symbol('sym'), '3'],
				description: '숫자 중 하나가 심볼',
				errorMessage: '[ERROR]',
			},
			{
				input: ['1', BigInt(10), '3'],
				description: '숫자 중 하나가 BigInt',
				errorMessage: '[ERROR]',
			},
			{
				input: ['1', ['2'], '3'],
				description: '숫자 중 하나가 배열',
				errorMessage: '[ERROR]',
			},
			{
				input: ['1', new Date(), '3'],
				description: '숫자 중 하나가 Date 객체',
				errorMessage: '[ERROR]',
			},
			{
				input: ['1', '', '3'],
				description: '숫자 중 하나가 빈 문자열',
				errorMessage: '[ERROR]',
			},
			{
				input: ['1', '  ', '3'],
				description: '숫자 중 하나가 공백 문자열',
				errorMessage: '[ERROR]',
			},
			{
				input: ['1', '1.2', '3'],
				description: '문자열 중 하나가 소수',
				errorMessage: '[ERROR]',
			},
			{
				input: ['1', '-2', '3'],
				description: '문자열 중 하나가 음수',
				errorMessage: '[ERROR]',
			},
			{
				input: ['1', '2a', '3'],
				description: '문자열 중 하나에 문자가 포함됨',
				errorMessage: '[ERROR]',
			},
			{
				input: ['1', 'a2', '3'],
				description: '문자열 중 하나에 문자가 포함됨',
				errorMessage: '[ERROR]',
			},
			{
				input: ['1', '2 ', '3'],
				description: '문자열 중 하나에 공백이 포함됨',
				errorMessage: '[ERROR]',
			},
			{
				input: ['1', ' 2', '3'],
				description: '문자열 중 하나에 공백이 포함됨',
				errorMessage: '[ERROR]',
			},
			{
				input: ['1', '2.0', '3'],
				description: '문자열 중 하나가 소수 포맷',
				errorMessage: '[ERROR]',
			},
		];

		invalidElementInputs.forEach(({ input, description, errorMessage }) => {
			test(`입력값: ${safeStringify(input)} (${description}) 일 때 에러가 발생해야 한다.`, () => {
				expect(() => isValidNumbers(input)).toThrow(Error);
				expect(() => isValidNumbers(input)).toThrow(errorMessage);
			});
		});
	});

	describe('경계값 테스트', () => {
		const boundaryInputs = [
			{
				input: ['0'],
				description: '단일 0 문자열',
				expected: true,
			},
			{
				input: [0],
				description: '단일 0 숫자',
				expected: true,
			},
			{
				input: ['0000000000'],
				description: '여러 개의 0을 가진 문자열',
				expected: true,
			},
			{
				input: [Number.MAX_SAFE_INTEGER],
				description: '최대 안전 정수',
				expected: true,
			},
			{
				input: ['99999999999999999999'],
				description: '매우 큰 숫자 문자열',
				expected: true,
			},
			{
				input: ['1', '2', '3'],
				description: '일반적인 작은 숫자 문자열 배열',
				expected: true,
			},
			{
				input: [1, 2, 3],
				description: '일반적인 작은 숫자 배열',
				expected: true,
			},
		];

		boundaryInputs.forEach(({ input, description, expected }) => {
			test(`경계값 입력: ${description}`, () => {
				expect(isValidNumbers(input)).toBe(expected);
			});
		});
	});

	describe('특수 케이스', () => {
		const specialCaseInputs = [
			{
				input: [[]],
				description: '빈 배열을 요소로 가진 배열',
				expected: false,
				errorMessage: '[ERROR]',
			},
			{
				input: [['1', '2', '3']],
				description: '중첩 배열을 요소로 가진 배열',
				expected: false,
				errorMessage: '[ERROR]',
			},
			{
				input: [null],
				description: 'null을 요소로 가진 배열',
				expected: false,
				errorMessage: '[ERROR]',
			},
			{
				input: [undefined],
				description: 'undefined를 요소로 가진 배열',
				expected: false,
				errorMessage: '[ERROR]',
			},
			{
				input: [new Date()],
				description: 'Date 객체를 요소로 가진 배열',
				expected: false,
				errorMessage: '[ERROR]',
			},
			{
				input: [Symbol('sym')],
				description: 'Symbol을 요소로 가진 배열',
				expected: false,
				errorMessage: '[ERROR]',
			},
			{
				input: [function () {}],
				description: '함수를 요소로 가진 배열',
				expected: false,
				errorMessage: '[ERROR]',
			},
		];

		specialCaseInputs.forEach(
			({ input, description, expected, errorMessage }) => {
				if (expected) {
					test(`특수 케이스: ${description} 일 때, 에러가 발생하지 않아야 한다.`, () => {
						expect(isValidNumbers(input)).toBe(true);
					});
				} else {
					test(`특수 케이스: ${safeStringify(input)} (${description}) 일 때, 에러가 발생해야 한다.`, () => {
						expect(() => isValidNumbers(input)).toThrow(Error);
						expect(() => isValidNumbers(input)).toThrow(errorMessage);
					});
				}
			},
		);
	});
});
