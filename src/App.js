import { Console } from '@woowacourse/mission-utils';

class App {
    async run() {
        /* 
            3. 커스텀 구분자를 지원하는 기능
            - 문자열의 앞 부분에서 `//` 와 `\n` 사이에 커스텀 구분자를 지정할 수 있습니다.
            - 예 : "//;\n1;2;3" -> 6
         */

        // 사용자로부터 입력(문자열)을 받음
        let input = await Console.readLineAsync(
            '덧셈할 문자열을 입력해주세요.\n'
        );
        let delimiter = /[,|:]/;

        // 압력이 빈 문자열인 경우, 0을 반환
        if (input.trim() === '') {
            return Console.print('0');
        }

        // 커스텀 구분자가 있는지 확인
        if (input.startsWith('//')) {
            const end = input.indexOf('\\n');
            delimiter = input.substring(2, end);
            input = input.substring(end + 2);
        }

        // 문자열을 쉼표,콜론 혹은 커스텀 구분자로 분리하여 숫자 배열로 변환 숫자를 합산
        const result = input
            .split(delimiter)
            .map(Number)
            .reduce((acc, curr) => acc + curr, 0);

        // 결과 출력
        Console.print(`${result}`);
    }
}

export default App;
