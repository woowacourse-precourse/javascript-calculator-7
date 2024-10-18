import { MissionUtils } from "@woowacourse/mission-utils";


class OutputView{
    printResult(result){
        MissionUtils.Console.print(`결과 : ${result}`);
    }

    printError(message){
        MissionUtils.Console.print(`[ERROR] ${message}`);
    }
}

export default OutputView;