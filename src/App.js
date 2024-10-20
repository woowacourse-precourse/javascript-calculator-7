import { MissionUtils } from '@woowacourse/mission-utils';

class App {
    /**
     * 프로그램 실행의 시작점
     */
    async run() {
        const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
        const result = this.parseInput(input); // 문자열 파싱
        MissionUtils.Console.print(`파싱 결과 : ${result}`);
    }

    /**
     * 입력받은 문자열을 파싱하여 숫자 문자열 배열 반환
     * @param {string} input - 사용자 입력 문자열
     * @returns {string[]} - 파싱된 숫자 문자열 배열
     */
    parseInput(input) {
        if (input === '') return [0]; // 빈 문자열일 경우 숫자 0 배열 반환
        return input.split(/[,|:]/); // 쉼표(,)와 콜론(:)으로 구분하여 문자열 배열 반환
    }
}

export default App;
