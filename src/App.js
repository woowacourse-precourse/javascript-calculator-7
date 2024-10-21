import { Console } from "@woowacourse/mission-utils";
import StringCalculator from "./StringCalculator.js";

class App {
    async run() {
        try {
            // 사용자 입력
            const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");

            // StringCalculator를 사용해 계산
            const result = StringCalculator.add(input);

            // 결과 출력
            Console.print(`결과 : ${result}`);
        } catch (error) {
            // 에러 발생 처리
            Console.print(error.message);
        }
    }
}

export default App;
