import { Console } from "@woowacourse/mission-utils";

class App {
    async run() {
        const STR = await Console.readLineAsync(
            "덧셈할 문자열을 입력해 주세요.\n"
        );

        let DIVIDER = /[,|:]/;
        let STR_NUMBERS = STR;

        if (STR === "") return 0;

        if (STR.startsWith("//") && STR.indexOf("\n") !== -1) {
            DIVIDER = new RegExp(`[${STR[2]}]`);
            STR_NUMBERS = STR.slice(STR.indexOf("\n") + 1);
        }

        const NUMBERS = STR_NUMBERS.split(DIVIDER).map((NUM) => {
            const PARSENUM = Number(NUM);
            if (isNaN(PARSENUM)) {
                throw new Error("[ERROR]");
            }
            return PARSENUM;
        });

        const SUM = NUMBERS.reduce((SUM, NUM) => SUM + NUM, 0);

        await Console.print(`결과: ${SUM}`);

        return SUM;
    }
}

export default App;
