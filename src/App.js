import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    const inputString = await this.getInputString();
    const result = this.calculate(inputString);
    this.printResult(result);
  }

  async getInputString() {    
    return await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
  }

  printResult(result) {
    MissionUtils.Console.print(`결과 : ${result}`);
  }

  calculate(inputString) {
    let delimiters = [",", ":"];

    if(this.checkCustomSplitStringByDelimiter(inputString)){
      delimiters = this.getMergedDelimiters(inputString, delimiters);
      inputString = this.getStrippedString(inputString);
    }

    if(this.isValidString(inputString, delimiters)) {
      const stringArray = this.splitStringByDelimiter(inputString, delimiters);
      const numberArray = this.returnNumbers(stringArray);
      return this.add(numberArray);
    }
    
    else {
      console.log("Error");
    }
  }

  add(numbers) {
    const initialValue = 0;
    
    return numbers.reduce((accumulator, number) => 
      accumulator + number, initialValue);
  }

  splitStringByDelimiter(inputString, delimiters) {
    let currentToken = '';
    let TokenArray = [];

    for(const element of inputString) {
      if(delimiters.includes(element)) {
        TokenArray.push(currentToken);
        currentToken = '';
      }
      else {
        currentToken += element;
      }
    }
   
    if(currentToken !== ''){
      TokenArray.push(currentToken);
    }

    return TokenArray;
  }

  checkCustomSplitStringByDelimiter(inputString) {
    return (inputString[0] === '/' && inputString[1] === '/' 
      && inputString[3] === '\\' && inputString[4] === 'n');
  }

  getMergedDelimiters(inputString, delimiters) {
    const customDelimiter = inputString[2];
    return [...delimiters, customDelimiter];
  }

  getStrippedString(inputString) {
    return inputString.slice(5,);
  }

  isValidString(inputString, delimiters) {
    for(const element of inputString) {
      const isNotInclude = !delimiters.includes(element);

      if(isNaN(element) && isNotInclude) {
        return false;
      }
    }
    return true
  }

  returnNumbers(inputArray) {
    return inputArray.map(element => Number(element));
  }
}


export default App;

