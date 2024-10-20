import { Console } from '@woowacourse/mission-utils';

class OutputHandler {
    static printResult(result) {
        Console.print(`결과 : ${result}`);
    }

    static printError(error) {
        Console.print(`${error.message}`);
    }
}

export default OutputHandler;