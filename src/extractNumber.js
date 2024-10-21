import { Console } from "@woowacourse/mission-utils"

const extractNumbers = (input) => {
  // Console.print(`add 함수에 입력된 문자열: "${input}"`)
  input = input.replace(/\\n/g, "\n")
  // Console.print(`전처리된 입력 문자열: "${input}"`)
  let customDelimiter = null
  const customDelimiterMatch = input.match(/^\/\/(.)\n(.*)$/s)

  if (customDelimiterMatch) {
    Console.print(customDelimiterMatch)
    customDelimiter = customDelimiterMatch[1]
    input = customDelimiterMatch[2] // 구분자를 제거한 나머지 문자열
    Console.print(input)
  }

  return { numbers: input, customDelimiter }
}

export default extractNumbers
