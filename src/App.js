import { MissionUtils } from '@woowacourse/mission-utils';

class App {
    /**
     */
    async run() {
        const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
        const result = this.calculateSum(input); // 숫자 계산
        MissionUtils.Console.print(`결과 : ${result}`);
    }

    /**
     * 입력받은 문자열을 파싱하고, 숫자들을 더한 값을 반환
     * @param {string} input - 사용자 입력 문자열
     * @returns {number} - 계산된 합
     */
    calculateSum(input) {
        if (input === '') return 0; // 빈 문자열일 경우 0 반환
        let delimiter = /[,|:]/; // 기본 구분자
        // 쉼표(,)와 콜론(:)으로 구분하여 숫자 배열로 변환 후 합산
        const tokens = input.split(/[,|:]/).map(Number);
        return tokens.reduce((acc, curr) => acc + curr, 0); // 배열의 숫자 합산
    }
}

export default App;
