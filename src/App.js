import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.errorMessage = '[ERROR]';
    this.result = 0;
  }

  //실행
  async run() {
    try {
      const inputMessage = await this.getInput();
      this.result = await this.inputSum(inputMessage);
      await Console.print(`결과 : ${this.result}`);
    } catch (error) {
      throw new Error(this.errorMessage);
    }
  }

  // 입력시 문자열이 맞는지 확인
  async getInput() {
    const inputMessage = await Console.readLineAsync();
    if (typeof inputMessage === "string" && inputMessage.length > 0) {
      return inputMessage;
    } 
    throw new Error(this.errorMessage);
  }

  //문자열이 맞을때 
  async inputSum(inputMessage) {
    let numberList = [];

    //커스텀 인지 확인
    if (inputMessage.startsWith('//')) {
      const match = inputMessage.match(/^\/\/(.)\\n(.*)$/);
      if (!match) {
        throw new Error(this.errorMessage);
      }
      //  구분자, 숫자문자열 반환
      const [, slicer, numberString] = match;
      numberList = numberString.split(slicer);
    } else {
      //기본 구분자인 경우
      numberList = inputMessage.split(/[,:]/)
    }
    return this.calculateSum(numberList);
  }

  // 숫자가 양수 인지 , 판별
  validateNumber(numStr) {
    const num = Number(numStr.trim());
    if (isNaN(num) || num < 0) {
      throw new Error(this.errorMessage);
    }
    return num;
  }

  // 합계 함수
  calculateSum(numberList) {
    if (numberList.length === 0) {
      throw new Error(this.errorMessage)
    }
    return numberList.reduce((acc, numStr) => {
      const num = this.validateNumber(numStr);
      return acc + num;
    }, 0);
  }
}

export default App;