import { Console } from "@woowacourse/mission-utils";
import checkInput from "./checkInput.js";

const io = async() => {
    try {
        const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
        checkInput(input);
    } catch (error) {
        
    }
};

export default io;