import { Console } from "@woowacourse/mission-utils";


function generateError(errorMsg) {
  throw new Error("[ERROR] " + errorMsg);
}

class DelimeterApi {
  delimeter = []
  customFormat = []

  constructor (delimeter1, delimeter2) {
    this.delimeter.push(delimeter1)
    this.delimeter.push(delimeter2)
  }

  setCustomFormat(start, end) {
    this.customFormat.push(start)
    this.customFormat.push(end)
  }

  parseCustomDelimeter(string) {
    const escapedCustomFormat = this.customFormat.map(customFormat => this.escapeRegExp(customFormat));
    const customRegExp = new RegExp(`^${escapedCustomFormat[0]}.${escapedCustomFormat[1]}`)

    const parsedData = string.match(customRegExp);
    if (parsedData === null) return string
  
    const customDelimeter = parsedData[0].charAt(2)
    if (isNaN(customDelimeter) === false) {
      generateError("커스텀 구분자는 숫자가 아닌 문자로 설정되어야 합니다.")
    }

    this.delimeter.push(customDelimeter);
    return string.replace(customRegExp, '')
  }

  escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  
  getregExp() {
    const escapedDelimeter = this.delimeter.map(delimeter => this.escapeRegExp(delimeter));
    const regExpString = escapedDelimeter.join('|');

    return new RegExp(regExpString, 'g')
  }
}

class NumberExtractorApi {
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

class CalculatorApi {
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

async function getUserInputData() {
  const userInputData = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n"); 
  if (isEmpty(userInputData) === true) generateError("입력 오류가 발생했습니다.")
  return userInputData;
}

function isEmpty(string) {
  return string === null || string === undefined ? true : false;
}

class App {
  async run() {
    const userInput = await getUserInputData();

    const numberExtractor = new NumberExtractorApi(userInput);
    const numArr = numberExtractor.extractNumber();

    const calcultor = new CalculatorApi(numArr);
    const result = calcultor.addAllNum();

    Console.print("결과 : " + result.toString())
  }
}

export default App;
