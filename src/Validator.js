import { checkForNaN } from './utils/checkForNaN.js';
import { hasNegative } from './utils/hasNegative.js';
import { throwError } from './utils/throwError.js';

class Validator {
	static checkNegativeInput(input) {
		if (hasNegative(input)) {
			throwError('[ERROR] : 양수만 입력할 수 있어요.');
		}
	}

	static checkSplitResult(input, result) {
		if (result[0] === input) {
			throwError('[ERROR] : 구분자와 양수로 이루어진 값을 입력해주세요.');
		}
		if (checkForNaN(result)) {
			throwError('[ERROR] : 입력값에 숫자 이외의 값이 포함되어 있어요.');
		}
	}

	static checkResultNull(result) {
		if (result === null) {
			throwError('[ERROR] : 커스텀 구분자를 확인할 수 없어요.');
		}
	}
}

export default Validator;
