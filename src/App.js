import { Console } from "@woowacourse/mission-utils";

// 사용자 입력
async function getUserInputData() {
  const userInputData = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");  
  return userInputData;
}

class NumberExtractor {
  orgUserInputData
  userInputData

  delemeter
  customDelemter

  NUM_REG = /\D/
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

    this.splitByDelimeter()

    return this.userInputData;
  }

  findCustomDelemeter() {
    const customDeliRegExp = new RegExp(`^${this.CUSTOM_DELI_START}.${this.CUSTOM_DELI_END}`)
    const customDeliString = this.userInputData.match(customDeliRegExp);

    if (customDeliString == undefined) return false
  
    this.customDelemter = customDeliString[0].charAt(2)

    if (isNaN(this.customDelemter) == false) {
      throw new Error("[ERROR] - 커스텀 구분자는 '문자'로 설정되어야 합니다.");
    }

    this.userInputData = this.userInputData.replace(customDeliRegExp, '')

    return true
    // todo : Error Handling
    // 1. custom 구분자 설정은 \n 으로 끝나야 합니다.
    // 2. custom 구분자는 '하나의 문자'로 설정되어야 합니다.
  }

  addDelemeter() {
    this.delemeter.push(this.customDelemter)
  }

  splitByDelimeter() {
    // todo: delemeter[2] undefined처리
    const deliRegExp = new RegExp(`${this.delemeter[0]}|${this.delemeter[1]}|${this.delemeter[2]}`, 'g')
    this.userInputData = this.userInputData.split(deliRegExp);

    if (this.checkError() == true) {
      throw new Error("[ERROR] - 구분자에 해당하지 않는 문자가 존재합니다.");
    }
  }

  checkError() {
    const findChar = this.userInputData.find((element) => {
      return this.NUM_REG.test(element);
    })
    return findChar != undefined
  }
}

class Calculator {
  numArr
  result

  constructor(numArr) {
    this.numArr = numArr
    this.result = BigInt(0)
  }

  addAllNum() {
    for (let i=0; i < this.numArr.length; i++) {
      this.result = this.addNumber(this.result, BigInt(this.numArr[i]))
    }
    return this.result
  }

  addNumber(left, right) {
    return left + right;
  }
}

class ErrorHandler {
  constructor() {

  }
}

class App {
  async run() {
    const userInput = await getUserInputData();

    const numberExtractor = new NumberExtractor(userInput);
    const numArr = numberExtractor.extractNumber();

    const calcultor = new Calculator(numArr);
    const result = calcultor.addAllNum();

    Console.print("결과 : " + result.toString())
  }
}

export default App;
