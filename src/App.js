import {Console} from "@woowacourse/mission-utils";

class App {

    async run() {
        //instruction message
        Console.print("덧셈할 문자열을 입력해 주세요.")

        let input = ""
        const output = Console.readLineAsync(input)

        output.then((value) => {
            Console.print(value) //입력값 임시 확인용 출력
        }).catch(() => {
            Console.print("[ERROR] 문자열을 입력해주세요.")
        })

    }
}

export default App;
