import { OUTPUT_MESSAGE } from "./constants.js";
import {
    Console,
} from '@woowacourse/mission-utils';

const OutputView = {
    printResult(result){
        Console.print(`${OUTPUT_MESSAGE.RESULT}${result}`);
    }
}


export default OutputView