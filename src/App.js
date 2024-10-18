import { MissionUtils } from '@woowacourse/mission-utils';

class App {
    async run() {
        try {
            const input = await MissionUtils.Console.readLineAsync('덧셉할 문자열을 입력해 주세요.\n');
            const result = this.calculate(input);

            MissionUtils.Console.print(`결과 : ${result}`);
        } catch (e) {
            MissionUtils.Console.print(e.message);
        }
    }

    calculate(input) {
        if (!input) return 0;

        let delimiter = '[,:]'; // 기본 구분자를 문자열로 정의 (정규식의 문자열 표현)

        // 커스텀 구분자가 있는지 확인
        if (input.startsWith('//')) {
            const customDelimiterIndex = input.indexOf('\\n');

            // 커스텀 구분자를 닫는 \n 가 없으면 에러 처리
            if (customDelimiterIndex === -1) {
                throw new Error('[ERROR] 올바른 형식의 커스텀 구분자 생성이 아닙니다.');
            }

            // 커스텀 구분자 추출
            let customDelimiter = input.slice(2, customDelimiterIndex);

            // 커스텀 구분자를 이스케이프 처리하여 정규식에 안전하게 사용
            customDelimiter = this.escapeRegExp(customDelimiter);

            // 기본 구분자에 커스텀 구분자 추가
            delimiter = `[,:${customDelimiter}]`;
            console.log('구분자', delimiter);

            // 커스텀 구분자 추가 후 입력 값
            input = input.slice(customDelimiterIndex + 2);
            console.log('줄바꿈 이후의 input', input);
        }

        // 정규식 형태로 delimiter 사용
        delimiter = new RegExp(delimiter);

        let numbers = input.split(delimiter).map(Number);

        console.log('숫자 배열', numbers);

        // 숫자들의 합을 계산하여 반환
        return numbers.reduce((sum, num) => sum + num, 0);
    }

    // 정규식 메타문자를 이스케이프 처리하는 함수
    escapeRegExp(char) {
        return char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}

export default App;
