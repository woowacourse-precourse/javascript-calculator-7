import { Console } from "@woowacourse/mission-utils";

class App {
    async run() {
        const str = await Console.readLineAsync(
            "덧셈할 문자열을 입력해 주세요.\n"
        );

        let dividerExp = /[,:]/;
        let strNumbers = str;

        if (str === "") {
            await Console.print(`결과: 0`);
            return;
        }

        if (str.startsWith("//") && str.indexOf("\n") !== -1) {
            const divider = str.slice(2, str.indexOf("\n"));
            dividerExp = new RegExp(`[${divider}]`, "g");
            strNumbers = str.slice(str.indexOf("\n") + 1);
        }

        const numbers = strNumbers.split(dividerExp).map((NUM) => {
            const PARSE_NUM = Number(NUM.trim());
            if (isNaN(PARSE_NUM) || PARSE_NUM < 0) {
                throw new Error(
                    `[ERROR] 구분자 외의 잘못된 값이 포함되었습니다. \n 잘못된 값:  ${PARSE_NUM}`
                );
            }
            return PARSE_NUM;
        });

        const SUM = numbers.reduce((SUM, NUM) => SUM + NUM, 0);
        await Console.print(`결과: ${SUM}`);
    }
}

export default App;
