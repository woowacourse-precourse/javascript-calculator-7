import { Console } from "@woowacourse/mission-utils";

async function getUserInputData() {
  const userInputData = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");  
  return userInputData;
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function makeError(errorMsg) {
  throw new Error("[ERROR] " + errorMsg);
}

class DelimeterApi {
  delimeter = []
  
  customFormatStart
  customFormatEnd

  constructor (delimeter1, delimeter2) {
    this.delimeter.push(delimeter1)
    this.delimeter.push(delimeter2)
  }

  setCustomFormat(start, end) {
    this.customFormatStart = start
    this.customFormatEnd = end
  }

  parseCustomDelimeter(userInputData) {
    const customRegExp = new RegExp(`^${escapeRegExp(this.customFormatStart)}.${escapeRegExp(this.customFormatEnd)}`)
    const parsedData = userInputData.match(customRegExp);
    if (parsedData === null) return userInputData
  
    const customDelimeter = parsedData[0].charAt(2)
    if (isNaN(customDelimeter) === false) {
      makeError("커스텀 구분자는 숫자가 아닌 문자로 설정되어야 합니다.")
    }

    this.delimeter.push(customDelimeter);
    return userInputData.replace(customRegExp, '')
  }

  getregExp() {
    console.log(this.delimeter)

    const escapedDelimeter = this.delimeter.map(delimeter => escapeRegExp(delimeter));
    const regExpString = escapedDelimeter.join('|');

    console.log(regExpString);

    return new RegExp(regExpString, 'g')
  }
}

class NumberExtractor {
  delimeterApi

  orgUserInputData
  userInputData

  constructor(userInputData) {
    this.orgUserInputData = userInputData
    this.userInputData = userInputData

    this.delimeterApi = new DelimeterApi(',', ':')
    this.delimeterApi.setCustomFormat('//', '\\n')
  }

  extractNumber() {
    this.userInputData = this.delimeterApi.parseCustomDelimeter(this.orgUserInputData)

    console.log(this.userInputData)

    this.splitByDelimeter()

    return this.userInputData;
  }

  splitByDelimeter() {
    this.userInputData = this.userInputData.split(this.delimeterApi.getregExp());
    this.errorHandling();
  }

  errorHandling() {
    const numRegExp = /\D/
    const findChar = this.userInputData.find((element) => {
      return numRegExp.test(element);
    })

    if(findChar != undefined) generateError("구분자에 해당하지 않는 문자가 존재합니다.")
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

function generateError(errorMsg) {
  throw new Error("[ERROR] " + errorMsg);
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
