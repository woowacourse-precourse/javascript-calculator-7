import { MissionUtils } from '@woowacourse/mission-utils';

class App {
    async run() {
        let appContinue = true;

        do {
            try {
                const input = await MissionUtils.Console.readLineAsync('덧셉할 문자열을 입력해 주세요.\n');
                const result = this.calculate(input);

                MissionUtils.Console.print(`결과 : ${result}`);
            } catch (e) {
                MissionUtils.Console.print(e.message);
                throw e;
            }

            try {
                let answer = (await MissionUtils.Console.readLineAsync('다시 한번 계산하시겠습니까? (Y/N)\n')) || '';

                if (answer.toUpperCase() === 'Y') {
                    appContinue = true;
                } else if (answer.toUpperCase() === 'N') {
                    appContinue = false;
                    MissionUtils.Console.print('계산을 종료합니다. 😊');
                } else {
                    appContinue = false;
                    throw new Error('[ERROR] Y또는 N만 입력할 수 있습니다.');
                }
            } catch (e) {
                MissionUtils.Console.print(e.message);
            }
        } while (appContinue);
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

        if (numbers.some((num) => isNaN(num))) {
            throw new Error('[ERROR] 올바르지 않은 입력입니다.');
        }

        if (numbers.some((num) => num < 0)) {
            throw new Error('[ERROR] 음수는 입력할 수 없습니다.');
        }

        const result = numbers.reduce((acc, number) => acc + number, 0);

        return result;
    }

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
