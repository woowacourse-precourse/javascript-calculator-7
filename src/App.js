import { Console } from "@woowacourse/mission-utils";

class App {
  constructor(){
    this.defaultSeparator = [',', ':'];
  }
  
  async run() {
      Console.print('덧셈할 문자열을 입력해주세요.');
      const INPUT_DATA = await Console.readLineAsync("");

      // 커스텀 구분자 추출 및 제거
      const [EXTRACT_DATA, SEPARATORS] = this.extractSeparator(INPUT_DATA, this.defaultSeparator); 

      // 구분자를 기준으로 분리
      const SPLIT_DATA = this.splitString(EXTRACT_DATA, SEPARATORS);    
  };

  extractSeparator(inputString, separators) {
    if (inputString.slice(0, 2) === "//" && inputString.slice(3, 5) === "\\n") {
      separators.push(inputString[2]);
      inputString = inputString.slice(5);
    }
    return [inputString, separators];
  }
  
  splitString(inputString, separators) {
    let splitData = [inputString];
    console.log(separators)
    for (const separator of separators) {
      let temp = [];
      for (const separatorString of splitData) {
        if (separatorString.indexOf(separator) !== -1) {
          temp = [...temp, ...separatorString.split(separator)];
        } else {
          temp = [...temp, separatorString];
        }
      }
      if (temp.length > 0) {
        splitData = [...temp];
      }
    }
  
    return splitData.map(Number);
  }
}
export default App;
