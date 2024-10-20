import { MissionUtils } from '@woowacourse/mission-utils';

class App {
    /**
     * 사용자 입력을 받아 숫자를 계산한 후 결과를 출력
     */
    async run() {
        try {
            // 사용자 입력을 비동기로 받음
            const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');

            // 입력된 문자열을 기반으로 숫자를 계산
            const result = this.calculateSum(input);

            // 결과 출력
            MissionUtils.Console.print(`결과 : ${result}`);
        } catch (error) {
            // 예외 발생 시 에러 메시지 출력
            MissionUtils.Console.print(error.message);
            throw error; // Promise에서 reject로 처리되도록 예외 던지기
        }
    }

    /**
     * 입력받은 문자열을 파싱하여 숫자들의 합을 계산
     * 커스텀 구분자가 있을 경우 해당 구분자를 사용하여 파싱
     * @param {string} input - 사용자 입력 문자열
     * @returns {number} - 계산된 합
     * @throws {Error} - 잘못된 입력에 대해 예외 발생
     */
    calculateSum(input) {
        if (input === '') return 0; // 빈 문자열인 경우 0 반환

        let delimiter = /[,|:]/; // 기본 구분자 (쉼표, 콜론)
        let numbersString = input;

        // 커스텀 구분자가 있을 경우 처리
        if (input.startsWith('//')) {
            const delimiterEndIndex = input.indexOf('\n'); // 커스텀 구분자와 숫자 부분을 구분
            if (delimiterEndIndex === -1) {
                throw new Error('[ERROR] 잘못된 입력입니다.'); // 구분자 포맷이 잘못된 경우 예외 처리
            }
            delimiter = input.substring(2, delimiterEndIndex); // 커스텀 구분자 추출
            numbersString = input.substring(delimiterEndIndex + 1); // 구분자 이후의 숫자 부분 추출
        }

        // 커스텀 구분자가 문자열인 경우에만 이스케이프 처리
        if (typeof delimiter === 'string' && delimiter.length > 0) {
            delimiter = delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // 정규식 특수문자 이스케이프
        }

        // 숫자 문자열을 구분자로 분리하고 숫자로 변환
        const tokens = numbersString.split(new RegExp(delimiter)).map((token) => {
            const number = Number(token);

            // 숫자가 아니거나 음수일 경우 예외 발생
            if (isNaN(number) || number < 0) {
                throw new Error('[ERROR] 잘못된 입력입니다.');
            }
            return number;
        });

        // 숫자 합산 후 반환
        return tokens.reduce((acc, curr) => acc + curr, 0);
    }
}

export default App;
