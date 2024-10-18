import { MissionUtils } from "@woowacourse/mission-utils";

class InputView {
    async getInput(){
        return await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    }
}

export default InputView;