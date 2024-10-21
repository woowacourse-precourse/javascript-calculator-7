import { Console } from "@woowacourse/mission-utils";

class App {
    async run() {
        const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
        const numbers = this.splitInput(input);

        this.checkValid(numbers);

        const sum = numbers.reduce((acc, cur) => acc + cur, 0);
        Console.print(`결과 : ${sum}`);
    }

    splitInput(input) {
        const checkSpecialPattern = /\/\/([^\n]+)\\n/;

        if (input.match(checkSpecialPattern)) {
            const delimiter = input.match(checkSpecialPattern)[1];
            input = input.split("\\n").slice(1)[0];
            return input.split(delimiter).map((item) => Number(item.trim()));
        } else {
            return input.split(/[,:]/).map((item) => Number(item.trim()));
        }
    }

    checkValid(numbers) {
        for (let num of numbers) {
            if (isNaN(num)) {
                throw new Error(`[ERROR] '${num}'은(는) 유효한 숫자가 아닙니다.`);
            }

            if (num < 0) {
                throw new Error("[ERROR] 음수는 허용되지 않습니다.");
            }
        }
    }
}

export default App;
