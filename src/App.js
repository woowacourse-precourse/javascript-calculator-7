import { Console } from '@woowacourse/mission-utils';

class App {
    async run() {
        /* 
            2. 빈 문자열 처리
            - 빈 문자열이 입력된 경우 `0`을 반환합니다.
            - 예 : "" -> 0
         */

        // 사용자로부터 입력(문자열)을 받음
        const INPUT = await Console.readLineAsync(
            '덧셈할 문자열을 입력해주세요.\n'
        );

        // 압력이 빈 문자열인 경우, 0을 반환
        if (INPUT.trim() === '') {
            return Console.print('0');
        }

        // 문자열을 쉼표와 콜론으로 분리하여 숫자 배열로 변환
        const NUMBERS = INPUT.split(/[,|:]/).map(Number);

        // 숫자를 합산
        const RESULT = NUMBERS.reduce(
            (acc, curr) => acc + curr,
            0
        );

        // 결과 출력
        Console.print(`${RESULT}`);
    }
}

export default App;
