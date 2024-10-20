import { MissionUtils } from '@woowacourse/mission-utils';

class App {
    /**
     * 프로그램 실행의 시작점
     */
    async run() {
        const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
        const result = this.calculateSum(input); // 숫자 계산
        MissionUtils.Console.print(`결과 : ${result}`);
    }

    /**
     * 입력받은 문자열을 파싱하고, 숫자들을 더한 값을 반환
     * 커스텀 구분자가 있으면 이를 사용하여 파싱
     * @param {string} input - 사용자 입력 문자열
     * @returns {number} - 계산된 합
     */
    calculateSum(input) {
        if (input === '') return 0; // 빈 문자열일 경우 0 반환

        let delimiter = /[,|:]/; // 기본 구분자
        let numbersString = input;

        // 커스텀 구분자가 있는 경우 처리
        if (input.startsWith('//')) {
            const delimiterEndIndex = input.indexOf('\n');
            delimiter = new RegExp(input.substring(2, delimiterEndIndex)); // 커스텀 구분자 추출
            numbersString = input.substring(delimiterEndIndex + 1); // 구분자 이후의 숫자 문자열 추출
        }

        const tokens = numbersString.split(delimiter).map(Number); // 숫자 변환
        return tokens.reduce((acc, curr) => acc + curr, 0); // 숫자 합산
    }
}

export default App;
