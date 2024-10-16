import { Console } from "@woowacourse/mission-utils"
const DIVIDER = [",", ":"]

class App {
  async run() {
    let input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n")

    const customDivider = input.match(/^\/\/(.+)\\n/)
    if (customDivider !== null) {
      input = input.replace(/^\/\/.+\\n/, "")
      DIVIDER.push(customDivider[1])
    }
  }
}

export default App
