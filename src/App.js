import { Console } from "@woowacourse/mission-utils";
class App {
    async run() {
        try {
            let result = 0;

            // 입력 : 사용자의 문자열 입력
            const inputData = await Console.readLineAsync(
                "덧셈할 문자열을 입력해 주세요.\n"
            );

            // case1: 기본 구분자(,:) 케이스
            const NORMAL_SEPARATOR = /^[0-9,\:]+$/; // 기본 구분자와 숫자로만 구성되어 있는가?
            let separatorNormalCase = NORMAL_SEPARATOR.test(inputData);
            if (separatorNormalCase) {
                const exportNumbers = inputData.split(/[, :]+/);
                result = exportNumbers.reduce(
                    (acc, num) => acc + Number(num),
                    0
                );
            }

            // case2: 커스텀 구분자 케이스
            const CUSTOM_SEPARATOR = /^\/\/(.+?)\\n(.*)$/; // "//구분자\n"의 커스텀 구분자 케이스인가?
            let separatorCustomCase = CUSTOM_SEPARATOR.exec(inputData); // 정규식에서 구분자와 계산식을 분리
            if (separatorCustomCase) {
                const customSeparator = separatorCustomCase[1];
                const exportNumbers =
                    separatorCustomCase[2].split(customSeparator);
                result = exportNumbers.reduce(
                    (acc, num) => acc + Number(num),
                    0
                );
            }

            // 출력 : 결과 값 출력
            Console.print(`결과 : ${result}`);
        } catch (error) {
            Console.print(`[ERROR] : ${error.message}`);
            throw error;
        }
    }
}

export default App;
