import { MissionUtils } from "@woowacourse/mission-utils";

class InputView {
    getInput(){
        return MissionUtils.Console.readLine('닉네임을 입력해주세요.', (answer) => 
            {
                console.log(`닉네임: ${answer}`);
            }
        );
    }
}

export default InputView;