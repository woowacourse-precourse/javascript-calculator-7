import { Console } from "@woowacourse/mission-utils";

// 사용자 입력
async function getUserInputData() {
  const userInputData = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");  
  return userInputData;
}

// 숫자 추출
function extractNumber(userInputData) {

}

class NumberExtractor {
  orgUserInputData
  userInputData
  numberData
  delemeter
  customDelemter

  NUM_REG = /[^0-9]/
  CUSTOM_DELI_START = '//'
  CUSTOM_DELI_END = '\\\\n'

  constructor(userInputData) {
    this.orgUserInputData = userInputData
    this.userInputData = userInputData

    this.delemeter = [',', ':']
  }

  extractNumber() {
    if (this.findCustomDelemeter() === true) {
      this.addDelemeter();
    }
  }

  findCustomDelemeter() {
    const customDeliReg = new RegExp(`^${this.CUSTOM_DELI_START}.${this.CUSTOM_DELI_END}`)
    const customDeliString = this.userInputData.match(customDeliReg);

    if (customDeliString == undefined) return false
  
    this.customDelemter = customDeliString[0].charAt(2)
    this.userInputData = this.userInputData.replace(customDeliReg, '')

    return true
    // todo : Error Handling
    // 1. custom 구분자 설정은 \n 으로 끝나야 합니다.
    // 2. custom 구분자는 '하나의 문자'로 설정되어야 합니다.
  }

  addDelemeter() {
    this.delemeter.push(this.customDelemter)
    console.log(this.delemeter)
  }

  splitInputDate(inputData) {
    this.splitReg = "/[,|:]|\/\/.\\n/g;"

    const numberArr = userInputData.split(splitReg);

    if (isError(numberArr) == true) {
      // todo: throw error 
      Console.print("error")
      return null
    }
    return numberArr
  }

  checkError() {
    const findChar = numberArr.find((element) => {
      return reg.test(element);
    })
    return findChar != undefined
  }
}

class Calculator {

  addNumber() {
    let result = BigInt(0)

    for (let i=0; i < numberArr.length; i++) {
      result += BigInt(numberArr[i])
    }
  
    return result
  }

}


class ErrorHandler {
}

class App {
  async run() {
    const userInput = await getUserInputData();
    const numberextractor = new NumberExtractor(userInput);
    numberextractor.extractNumber();
  }
}

export default App;
