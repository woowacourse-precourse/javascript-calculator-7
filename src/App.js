import { Console } from "@woowacourse/mission-utils";
class App {
    async run() {
        try {
            const inputData = await Console.readLineAsync(
                "덧셈할 문자열을 입력해 주세요.\n"
            );

            Console.print(`결과 : ${inputData}`);
        } catch (error) {
            Console.print(`[ERROR] : ${error.message}`);
        }
    }
}

export default App;
