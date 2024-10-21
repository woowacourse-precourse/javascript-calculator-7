import { Console } from "@woowacourse/mission-utils"
import add from "./add.js"

class App {
  async run() {
    try {
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n")
      const result = add(input)
      Console.print(`결과 : ${result}`)
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`)
      throw error
    }
  }
}

export default App
