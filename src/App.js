import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.normalSeperators = [',', ':'];
    this.customSeperators = ['//', '\\n'];
    this.userInputValue = ''
  }

  async run() {
    const userInput = await Console.readLineAsync('문자열 덧셈을 해보아요:');

    if (userInput === "") return this.print(0);

    const result = this.isValidSeperator(userInput);
    this.userInputValue = userInput;

    !result ?
      this.printError('입력값 : ' + this.userInputValue) :
      this.print(result);
  };

  isValidSeperator(str) {
    // 아무 구분자가 없을 경우
    if (
      this.normalSeperators.every(e => !str.includes(e)) &&
      this.customSeperators.every(e => !str.includes(e)) 
    ) {
      this.printError('구분자("," , ":" , "//", "\\n")를 넣어주세요');
      return
    };

    // "//"와 "\\n"사이에 커스텀 구분자가 있을 경우
    if (this.customSeperators.every(e => str.includes(e))) {
      const changedArray = this.checkCustomSeperator(str);
      return changedArray && this.addAllArray(changedArray);
    };

    // ','와 ":" 만 있을 경우 
    if (this.normalSeperators.some(e => str.includes(e))) {
      const changedArray = this.strToArrayHandler(str);
      return this.addAllArray(changedArray)
    }

    // 그 외의 경우 예외처리
    this.printError('알 수 없는 오류가 발생했습니다 앱을 다시 실행해주세요');
  }

  isContainNum(str) {
    return str.split('').some(char =>
      !isNaN(char) && char !== ' '
    );
  }

  checkCustomSeperator(customStr) {
    const start = customStr.indexOf('//');
    const end = customStr.indexOf('\\n');
    const customSeperator = customStr.slice(start + 2, end).trim();

    // //와 \\n사이에 아무 문자가 없을 경우
    if (!customSeperator) {
      return this.printError('커스텀 구분자는 //와 \\n사이에 있어야 합니다');
    }
    // 커스텀 구분자 사이에 숫자가 있을 경우
    if (this.isContainNum(customSeperator)) {
      return this.printError('커스텀 구분자 사이에 숫자가 있으면 안됩니다');
    }

    const cleanedArray = customStr
      .replaceAll('//', '*')
      .replaceAll('\\n', '*')
      .replaceAll(customSeperator, '*');
    
    return this.strToArrayHandler(cleanedArray);
  }

  strToArrayHandler(arrToChange) {
    return arrToChange
      .replaceAll(',', '*')
      .replaceAll(':', '*')
      .split('*');
  }

  addAllArray(arr) {
    if (arr.some(num => Number(num) < 0))
      return this.printError("[ERROR] 음수는 사용 할 수 없습니다");
    return arr.reduce((a, b) => Number(a) + Number(b));
  }

  printError(msg) {
    Console.print('[ERROR]' + msg);
    throw new Error("[ERROR]");
  }

  print(str) {
    Console.print('결과 : ' + str);
  }
}

export default App;
