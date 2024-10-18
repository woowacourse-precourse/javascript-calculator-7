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

            customDelimiter = this.validateRegExp(customDelimiter);

            delimiter = `[,:${customDelimiter}]`;

            input = input.slice(customDelimiterIndex + 2);
        }

        delimiter = new RegExp(delimiter);

        let numbers = input.split(delimiter).map(Number);

        // 음수는 예외로 처리
        if (numbers.some((num) => num < 0)) {
            throw new Error('[ERROR] 음수는 입력할 수 없습니다.');
        }

        const result = numbers.reduce((acc, number) => acc + number, 0);

        return result;
    }

    validateRegExp(char) {
        if (/\d/.test(char)) {
            throw new Error('[ERROR] 숫자는 커스텀 구분자로 사용할 수 없습니다.');
        }

        return char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}

export default App;
