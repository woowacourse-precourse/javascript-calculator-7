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

        let delimiter = '[,:]';

        if (input.startsWith('//')) {
            const customDelimiterIndex = input.indexOf('\\n');

            if (customDelimiterIndex === -1) {
                throw new Error('[ERROR] 올바른 형식의 커스텀 구분자 생성이 아닙니다.');
            }

            let customDelimiter = input.slice(2, customDelimiterIndex);

            // 커스텀 구분자를 유효성 검사 후 이스케이프 처리
            customDelimiter = this.validateRegExp(customDelimiter);

            delimiter = `[,:${customDelimiter}]`;

            input = input.slice(customDelimiterIndex + 2);
        }

        delimiter = new RegExp(delimiter);

        let numbers = input.split(delimiter).map(Number);

        const result = numbers.reduce((acc, number) => acc + number, 0);

        return result;
    }

    // 예외를 막을 유효성 검사 함수
    validateRegExp(char) {
        // 잘못된 형식의 숫자 입력을 방지
        if (/\d/.test(char)) {
            throw new Error('[ERROR] 숫자는 커스텀 구분자로 사용할 수 없습니다.');
        }

        // 정규식 메타문자를 이스케이프 처리
        return char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}

export default App;
