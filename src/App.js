import { Console } from "@woowacourse/mission-utils";

class App {
    async run() {
        const STR = await Console.readLineAsync(
            "덧셈할 문자열을 입력해 주세요.\n"
        );

        let DIVIDER = /[,|:]/;
        let STR_NUMBERS = STR;

        if (STR === "") {
            await Console.print(`결과: 0`);
            return 0;
        }

        if (STR.startsWith("//") && STR.indexOf("\n") !== -1) {
            const DIVIDER = STR.slice(2, STR.indexOf("\n"));
            DIVIDER_EXP = new RegExp(`[${DIVIDER}]`);
            STR_NUMBERS = STR.slice(STR.indexOf("\n") + 1);
        }

        const NUMBERS = STR_NUMBERS.split(DIVIDER_EXP).map((NUM) => {
            const PARSE_NUM = Number(NUM);
            if (isNaN(PARSE_NUM) || PARSE_NUM < 0) {
                throw new Error(
                    `[ERROR] 구분자 외의 잘못된 값이 포함되었습니다. \n 잘못된 값:  ${PARSE_NUM}`
                );
            }
            return PARSE_NUM;
        });

        const SUM = NUMBERS.reduce((SUM, NUM) => SUM + NUM, 0);

        await Console.print(`결과: ${SUM}`);

        return SUM;
    }
}

export default App;
