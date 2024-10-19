import { Console } from "@woowacourse/mission-utils";

class App {
    async run() {
        // Console.readLineAsync()와 Console.print()를 활용하여 사용자의 값 입력, 출력

        const inputText = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");

        Console.print(inputText); // input 값 확인
    }
}

export default App;
