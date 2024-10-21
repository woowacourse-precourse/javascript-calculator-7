import { Console } from "@woowacourse/mission-utils";

class App {
    async run() {
        try {
            let str = await Console.readLineAsync(
                "덧셈할 문자열을 입력해 주세요.\n"
            );

            str = str.replace("\\n", "\n");

            let dividerExp = /[,:]/;
            let strNumbers = str;

            if (str === "") {
                await Console.print(`결과: 0`);
                return;
            }

            if (str.startsWith("//") && str.indexOf("\n") !== -1) {
                const divider = str.slice(2, str.indexOf("\n"));
                dividerExp = new RegExp(divider);
                strNumbers = str.slice(str.indexOf("\n") + 1);
            }

            const numbers = strNumbers.split(dividerExp).map((NUM) => {
                if (isNaN(NUM)) {
                    throw new Error("잘못된 숫자가 포함되었습니다.");
                }

                if (NUM < 0) {
                    throw new Error("음수는 허용되지 않습니다.");
                }
                const PARSE_NUM = Number(NUM.trim());

                return PARSE_NUM;
            });

            const SUM = numbers.reduce((SUM, NUM) => SUM + NUM, 0);
            await Console.print(`결과: ${SUM}`);
        } catch (error) {
            console.error("[ERROR]: ", error.message);
        }
    }
}

export default App;
