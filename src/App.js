import { Console } from '@woowacourse/mission-utils';

class App {
    async run() {
        Console.print('덧셈할 문자열을 입력해 주세요.');
        const input = await Console.readLineAsync('');

        let result = 0;
        let customSeperator = '';

        if (input.length === 0) {
            // 문자열이 없는 경우
            result = 0;
        } else if (input.startsWith('//')) {
            // 커스텀 구분자 저장
            customSeperator = input[2];
        }

        // 구분자 구별하여 숫자 덧셈
        let num = '';
        if (customSeperator) {
            // 커스텀 구분자가 있는 경우
            for (let i = 5; i < input.length; i++) {
                if (input[i] !== customSeperator) {
                    num += input[i];
                } else {
                    result += parseInt(num);
                    num = '';
                }
            }
        } else {
            // 일반 구분자(쉼표 또는 콜론)인 경우
            for (let i = 0; i < input.length; i++) {
                if (input[i] === ',' || input[i] === ':') {
                    result += parseInt(num);
                    num = '';
                } else {
                    num += input[i];
                }
            }
        }

        if (num) {
            result += parseInt(num);
        }

        Console.print('결과 : ' + result);
    }
}

export default App;
