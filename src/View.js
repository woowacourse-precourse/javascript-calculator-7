import {Console} from "@woowacourse/mission-utils";

class View {
    printInput() {
        return Console.print("덧셈할 문자열을 입력해 주세요.")
    }

    printResult(result) {
        return Console.print(`결과 : ${result}`)
    }

    printError(error) {
        return Console.print("[ERROR] 에러")
    }

}

export default View