import { ERROR_MESSAGE } from '../constant/message.js';

/**
 * 각 상황별 오류 검토하여 오류메세지와 함께 오류를 던집니다.
 */

class Errors {
    constructor(input, customs, nums) {
        this.input = input;
        this.customs = customs;
        this.nums = nums;
    }

    // 음수 오류
    negativeNumError() {
        this.nums.map((value) => {
            if (value < 0) throw new Error(ERROR_MESSAGE.ERROR_NUM);
        });
    }

    // 문자 포함 오류
    strError() {
        this.nums.map((value) => {
            if (value !== '' && /[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ]/.test(value)) {
                throw new Error(ERROR_MESSAGE.ERROR_STR);
            }
        });
    }

    // 구분자만 포함시 오류
    onlySeperatorError() {
        if (this.input !== '' && this.nums.every((num) => num === ''))
            throw new Error(ERROR_MESSAGE.ERROR_SEPERATOR);
    }

    // 기본 구분자 형식 오류
    basicSeparatorError() {
        this.nums.map((value) => {
            if (/[^a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ-]/.test(value))
                throw new Error(ERROR_MESSAGE.ERROR_BASIC_SEPARATOR);
        });
    }

    // 커스텀 구분자 형식 오류
    customSeperatorError() {
        if (!this.input.startsWith('//')) return;
        // 커스텀 구분자 형식 검사
        if (!this.customs) {
            throw new Error(ERROR_MESSAGE.ERROR_CUSTOM_SEPARATOR);
        }

        // 구분자가 숫자인 경우 검사
        if (!isNaN(Number(this.customs))) {
            throw new Error(ERROR_MESSAGE.ERROR_CUSTOM_SEPARATOR);
        }
    }

    run() {
        this.customSeperatorError();
        this.basicSeparatorError();
        this.negativeNumError();
        this.strError();
        this.onlySeperatorError();
    }
}
export default Errors;
