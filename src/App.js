import { Console } from '@woowacourse/mission-utils';

class App {
    async run(input) {
        try {
            // 기본 구분자 처리 (쉼표와 콜론)
            const SEPARATOR = input.split(/[,:]/).map(Number).filter(n => !isNaN(n));

            // 커스텀 구분자 처리 (예: "//;\n1;2;3")
            const customSeparatorMatch = input.match(/^\/\/(.)\\n/);
            let CUSTOM_SEPARATOR = [];
            if (customSeparatorMatch) {
                const customSep = customSeparatorMatch[1];  // 커스텀 구분자 추출
                const splitInput = input.split(`\\n`)[1];  // "\n" 이후의 숫자 부분만 가져옴
                CUSTOM_SEPARATOR = splitInput.split(customSep).map(Number).filter(n => !isNaN(n));
            }

            // 기본 구분자와 커스텀 구분자 결과 합산
            const TOTAL = [...SEPARATOR, ...CUSTOM_SEPARATOR].reduce((acc, num) => acc + num, 0);

            // Woowa의 Console.readLine을 이용하여 입력을 받고 결과를 출력
            Console.readLine('덧셈할 문자열 입력해 주세요.\n', (input) => {
                if (!isNaN(TOTAL)) {
                    if (SEPARATOR.length === 0 && CUSTOM_SEPARATOR.length === 0) {
                        Console.print('[ERROR] 잘못된 입력입니다.');
                    } else {
                        Console.print(`결과: ${TOTAL}`);
                    }
                } else {
                    throw new Error('[ERROR] 숫자가 포함되지 않은 입력입니다.');
                }
            });

        } catch (error) {
            Console.print(error.message);  // 에러 출력 (err -> error 수정)
        }
    }
}

export default App;
