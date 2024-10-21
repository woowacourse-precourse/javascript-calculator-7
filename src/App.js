// src/App.js
import { Console } from '@woowacourse/mission-utils';

class App {
    async run() {
        Console.print('덧셈할 문자열을 입력해 주세요.');
        Console.readLineAsync((input) => {
            try {
                const result = this.calculateSum(input);
                Console.print(`결과 : ${result}`);
            } catch (error) {
                Console.print(error.message);
            }
        });
    }

    /**
     * 문자열에서 숫자를 추출하여 합산하는 함수
     * @param {string} input - 덧셈할 문자열
     * @returns {number} - 숫자의 합
     * @throws {Error} - 잘못된 입력일 경우 에러 발생
     */
    calculateSum(input) {
        // 빈 문자열일 경우 0 반환
        if (input === '') {
            return 0;
        }

        let numbers;

        // 커스텀 구분자 처리
        if (input.startsWith('//')) {
            // 커스텀 구분자 형식: //[구분자]\n[숫자들]
            const delimiterEndIndex = input.indexOf('\n');
            if (delimiterEndIndex === -1) {
                throw new Error('[ERROR] 구분자 형식이 잘못되었습니다.');
            }

            const delimiterSection = input.substring(2, delimiterEndIndex);
            const numberSection = input.substring(delimiterEndIndex + 1);

            if (!delimiterSection) {
                throw new Error('[ERROR] 구분자가 지정되지 않았습니다.');
            }

            numbers = this.splitByDelimiter(numberSection, delimiterSection);
        } else {
            // 기본 구분자 쉼표(,)와 콜론(:)으로 분리
            numbers = this.splitByDelimiters(input, [',', ':']);
        }

        // 숫자로 변환 및 유효성 검사
        const numberList = numbers.map((num) => {
            const parsedNum = Number(num);
            if (isNaN(parsedNum) || parsedNum < 0) {
                throw new Error('[ERROR] 잘못된 입력입니다.');
            }
            return parsedNum;
        });

        // 숫자의 합 계산
        const sum = numberList.reduce((acc, curr) => acc + curr, 0);
        return sum;
    }

    /**
     * 하나의 구분자를 사용하여 문자열을 분리하는 함수
     * @param {string} input - 분리할 문자열
     * @param {string} delimiter - 사용할 구분자
     * @returns {string[]} - 분리된 문자열 배열
     */
    splitByDelimiter(input, delimiter) {
        return input.split(delimiter);
    }

    /**
     * 여러 개의 구분자를 사용하여 문자열을 분리하는 함수
     * @param {string} input - 분리할 문자열
     * @param {string[]} delimiters - 사용할 구분자 배열
     * @returns {string[]} - 분리된 문자열 배열
     */
    splitByDelimiters(input, delimiters) {
        // 정규식을 사용하여 여러 구분자로 분리
        const regex = new RegExp(`[${delimiters.map(this.escapeRegExp).join('')}]`);
        return input.split(regex);
    }

    /**
     * 정규식에서 특수 문자를 이스케이프하는 함수
     * @param {string} string - 이스케이프할 문자열
     * @returns {string} - 이스케이프된 문자열
     */
    escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}

export default App;
