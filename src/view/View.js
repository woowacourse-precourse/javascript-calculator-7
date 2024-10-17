import { Console } from "@woowacourse/mission-utils";

const View = {

    async readInputStirng() {
        const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
        return input;
    },

    async printResult(result) {
        await Console.print(`결과 : ${result}`);
    },

    printErrorMessage(message) {
        Console.print(message);
    }

}

export default View;