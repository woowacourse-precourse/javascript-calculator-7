import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.normalSeperators = [',', ':'];
    this.customSeperators = ['//', '\\n'];
  }

  async run() {
    const userInput = await Console.readLineAsync('문자열 덧셈을 해보아요:');
    this.isValidSeperator(userInput);
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
      this.checkCustomSeperator(str)
      return
    };

    // ','와 ":" 만 있을 경우 
    if (this.normalSeperators.some(e => str.includes(e))) {
      return
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
    const customSeperator = customStr.slice(start + 2, end);

    ////와 \\n사이에 아무 문자가 없을 경우
    if (!customSeperator) {
      return this.printError('커스텀 구분자는 //와 \\n사이에 있어야 합니다');
    }
    if (this.isContainNum(customStr)) {
      return this.printError('커스텀 구분자 사이에 숫자가 있으면 안됩니다');
    }
    return
  }

  strToArrayHandler(arrToChange) {
    const changedArray = arrToChange
      .replaceAll(',', '')
      .replaceAll(':', '')
      .split('');
    
  }


  printError(msg) {
    Console.print('[ERROR]'+msg);
  }

  print(str) {
    Console.print('결과:' + str);
  }
}

export default App;
