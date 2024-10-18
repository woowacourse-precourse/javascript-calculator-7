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

            this.validateCustomDelimiter(customDelimiter);

            customDelimiter = this.escapeRegExp(customDelimiter);

            delimiter = `[,:${customDelimiter}]`;

            input = input.slice(customDelimiterIndex + 2);
        }

        delimiter = new RegExp(delimiter);

        let numbers = input.split(delimiter).map(Number);

        if (numbers.some((num) => num < 0)) {
            throw new Error('[ERROR] 음수는 입력할 수 없습니다.');
        }

        const result = numbers.reduce((acc, number) => acc + number, 0);

        return result;
    }

    // 유효성 검사를 따로 분리
    validateCustomDelimiter(char) {
        if (/\d/.test(char)) {
            throw new Error('[ERROR] 숫자는 커스텀 구분자로 사용할 수 없습니다.');
        }

        if (/-/.test(char)) {
            throw new Error('[ERROR] "-"는 커스텀 구분자로 사용할 수 없습니다.');
        }
    }

    escapeRegExp(char) {
        return char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}

export default App;
