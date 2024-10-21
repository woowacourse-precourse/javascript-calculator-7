import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES, VALIDATES } from "../constants/messages.js"
async function UserInput() {
    
    const input = await MissionUtils.Console.readLineAsync(MESSAGES.START);
    const validInput = input.replace("\\n","\n");
    
    if (validInput === "") {
        return 0;
    }

    return validInput; 
}

export default UserInput;