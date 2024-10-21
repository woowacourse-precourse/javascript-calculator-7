import split from "./split.js"
import extractNumbers from "./extractNumber.js"
import validNumber from "./validNumber.js"
import { Console } from "@woowacourse/mission-utils"

const add = (input) => {
  if (input === "") return 0

  const { numbers, customDelimiter } = extractNumbers(input)
  const delimiters = [",", ":"]

  if (customDelimiter) {
    delimiters.push(customDelimiter)
  }

  const splitNumbers = split(numbers, delimiters)
  Console.print(`splitNumbers: ${splitNumbers}`)
  const numberList = splitNumbers.map((num) => validNumber(num))

  return numberList.reduce((acc, num) => acc + num, 0)
}

export default add
