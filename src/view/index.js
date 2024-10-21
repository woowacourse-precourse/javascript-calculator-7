import { Console } from "@woowacourse/mission-utils"

//I/O 작업 세팅
export class View {
  static async input() {
    return await Console.readLineAsync("덧셈할 문자열을 입력하세요.\n");
  }

  static printResult(result) {
    Console.print(`결과 : ${result}`)
  }
}