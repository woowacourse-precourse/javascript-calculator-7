import { isValidInputType } from '../src/models/validations/isValidInputType.js';
import { ERROR_MESSAGES } from '../src/constants/constants.js';
const safeStringify = (input) => {
	if (typeof input === 'bigint') {
		return `${input.toString()}n`;
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

describe('isValidInputType 함수 테스트', () => {
	describe('유효한 입력 타입', () => {
		const validInputs = [
			'1,2,3',
			'',
			'   ',
			'Hello, World!',
			'123',
			'null',
			'undefined',
			'true',
			'false',
			'null,undefined,true,false',
			123,
			0,
			-1,
			3.14,
			true,
			false,
			[],
			['1', '2'],
			{},
			{ a: 1 },
			() => {},
			Symbol('sym'),
			BigInt(10),
		];

		validInputs.forEach((input) => {
			test(`입력값: ${safeStringify(input)}일 때 에러가 발생하지 않아야 한다.`, () => {
				expect(() => isValidInputType(input)).not.toThrow();
			});
		});
	});

	describe('유효하지 않은 입력 타입', () => {
		const invalidInputs = [
			{ value: undefined, type: 'undefined' },
			{ value: null, type: 'null' },
		];

		invalidInputs.forEach(({ value, type }) => {
			test(`입력값 타입이 ${type}일 때 TypeError가 발생해야 한다.`, () => {
				expect(() => isValidInputType(value)).toThrow(TypeError);
				expect(() => isValidInputType(value)).toThrow(
					ERROR_MESSAGES.INVALID_TYPE,
				);
			});
		});
	});
});
