import {Console, MissionUtils} from "@woowacourse/mission-utils";

class App {
    async run() {
        let inputStr = await Console.readLineAsync("덧셈할 문자열을 입력해주세요.\n");
        let result = 0;
        if (inputStr === "") {
            result = 0;
        } else {
            let nums = inputStr.split(/[:,]/);
            for (const num of nums) {
                result += Number(num);
            }
        }
        Console.print("결과 : " + result);
    }
}

export default App;

