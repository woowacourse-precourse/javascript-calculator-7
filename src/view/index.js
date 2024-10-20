import { Console } from "@woowacourse/mission-utils"

export class View {
  static async input() {
    return await Console.readLineAsync("문자열을 입력하세요");
  }

  static printResult(result) {
    Console.print(`결과 : ${result}`)
  }
}