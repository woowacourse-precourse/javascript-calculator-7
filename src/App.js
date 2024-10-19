import {Console, MissionUtils} from "@woowacourse/mission-utils";

class App {
    async run() {
        let inputStr = await Console.readLineAsync("덧셈할 문자열을 입력해주세요.\n");
        let result = -1;
        if (inputStr === "") {
            result = 0;
        } else if (inputStr.slice(0, 2) === '//') {
            let endIndex = inputStr.indexOf("\\n");
            const std = inputStr.slice(2, endIndex);
            if (std.length > 1) {
                throw new Error('[ERROR] 구분자는 문자여야 합니다.');
            }
            let nums = inputStr.slice(5).split(std);
            try {
                result = this.#SUM(nums)
            } catch (e) {
                throw e;
            }
        } else {
            let nums = inputStr.split(/[:,]/);
            try {
                result = this.#SUM(nums)
            } catch (e) {
                throw e;
            }
        }
        if (result !== -1) {
            Console.print("결과 : " + result);
        }
    }

    #SUM = (nums) => {
        let result = 0
        for (const num of nums) {
            if (num.size <=  10 && !isNaN(parseFloat(num)) && num > 0) {
                result += Number(num);
            } else if (num.size > 10) {
                throw new Error('[ERROR] 숫자 범위를 넘어갑니다.');
            } else {
                throw new Error('[ERROR] 잘못된 입력입니다.');
            }
        }
        return result
    }
}


export default App;

