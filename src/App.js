import { Console } from "@woowacourse/mission-utils"
const DIVIDER = [",", ":"]

function escapeRegExp(string) {
  // 정규표현식 특수문자를 이스케이프 처리
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
class App {
  async run() {
    let input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n")

    const customDivider = input.match(/^\/\/(.+)\\n/)
    if (customDivider !== null) {
      input = input.replace(/^\/\/.+\\n/, "")
      DIVIDER.unshift(customDivider[1])
    }

    const escapedDivider = DIVIDER.map(escapeRegExp).join("|")
    const splitRegex = new RegExp(escapedDivider)

    const numbers = input
      .split(splitRegex)
      .map((val) => (val == "" ? NaN : Number(val)))

    const isAllNumbers = (numbers) => {
      return numbers.every((number) => !Number.isNaN(number))
    }
    const isAllPositiveNumber = (numbers) => {
      return numbers.every((number) => number >= 0)
    }

    if (input === "") {
      throw new Error("[ERROR] 빈 문자열 입니다.")
    }

    if (!isAllNumbers(numbers)) {
      throw new Error(
        "[ERROR] 수와 구분자를 포함한 올바른 문자열을 입력해주세요. ex) 1,2",
      )
    }

    if (!isAllPositiveNumber(numbers)) {
      throw new Error("[ERROR] 양수만 입력해주세요.")
    }

    Console.print(`결과 : ${numbers.reduce((a, b) => a + b)}`)
  }
}

export default App
