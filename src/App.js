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
                // answer에 undefined가 들어올 경우, toUpperCase() 호출 시 오류가 발생할 수 있으므로 기본값으로 빈 문자열을 할당합니다.
                let answer = (await MissionUtils.Console.readLineAsync('다시 한번 계산하시겠습니까? (Y/N)\n')) || '';

                // 다시 계산을 묻고 y를 입력시 appContinue에 true를 할당해서 계산을 다시 실행
                // 사용자 편의성을 위해 소문자 'y'나 'n'을 입력해도 올바르게 처리될 수 있도록 toUpperCase()를 적용합니다.

                if (answer.toUpperCase() === 'Y') {
                    appContinue = true;
                } else if (answer.toUpperCase() === 'N') {
                    // n을 입력시 appContinue에 false를 할당해서 while문을 종료, 프로그램 또한 종료
                    appContinue = false;
                    MissionUtils.Console.print('계산을 종료합니다. 😊');
                } else {
                    // y, n, Y, N 이외의 값이 들어 왔을 때 y 또는 n만 입력 가능하다 알려주고 프로그램을 종료
                    // 이 부분에서 프로그램을 다시 실행을 할까 고민을 했지만 [ERROR]로 시작하는 예외 처리이기에 프로그램 종료
                    appContinue = false;
                    throw new Error('[ERROR] Y또는 N만 입력할 수 있습니다.');
                }
            } catch (e) {
                MissionUtils.Console.print(e.message);
                // throw e를 사용하면 테스트 프로그램에서 예외가 다시 던져져 프로그램이 비정상적으로 종료됩니다.
                // 따라서 정상적으로 종료되도록 이 부분에서 예외를 다시 던지지 않습니다.
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
