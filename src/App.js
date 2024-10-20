import { Console } from '@woowacourse/mission-utils';

class App {
    async run() {
        try {
            /**
             4. 음수 또는 잘못된 입력 처리
             - 사용자가 음수나 유효하지 않은 값을 입력하면 [ERROR] 메시지를 출력하고 애플리케이션을 종료합니다.
             - 예 : "-1,2" -> [ERROR] 음수는 허용되지 않습니다.
             - 예 : "1, a" -> [ERROR] 유효하지 않은 입력입니다.
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
                .map((str) => {
                    const num = Number(str);
                    if (isNaN(num)) {
                        throw new Error(
                            '[ERROR] 유효하지 않은 입력입니다.'
                        );
                    }
                    if (num < 0) {
                        throw new Error(
                            '[ERROR] 음수는 허용되지 않습니다.'
                        );
                    }
                    return num;
                })
                .reduce((acc, curr) => acc + curr, 0);

            // 결과 출력
            Console.print(`${result}`);
        } catch (error) {
            Console.print(error.message);
        }
    }
}

export default App;
