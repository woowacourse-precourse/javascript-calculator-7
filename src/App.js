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
            let separatorCase = NORMAL_SEPARATOR.test(inputData);
            if (separatorCase) {
                const exportNumbers = inputData.split(/[, :]+/);
                result = exportNumbers.reduce(
                    (acc, num) => acc + Number(num),
                    0
                );
            }

            // 출력 : 결과 값 출력
            Console.print(`결과 : ${result}`);
        } catch (error) {
            Console.print(`[ERROR] : ${error.message}`);
        }
    }
}

export default App;
