import { Console } from '@woowacourse/mission-utils';

class App {
    async run() {
        /* 
            1. 기본 구문자를 사용하여 숫자 더하기 
            - 쉼표와 콜론을 구분자로 사용하는 문자열에서 숫자를 추출하고 합산합니다.
            - 예 : "1,2,3" -> 6
         */

        // 사용자로부터 입력(문자열)을 받음
        const INPUT = await Console.readLineAsync(
            '덧셈할 문자열을 입력해주세요.\n'
        );

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
