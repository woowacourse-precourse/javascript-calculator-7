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
  };

  extractSeparator(inputString, separators) {
    if (inputString.slice(0, 2) === "//" && inputString.slice(3, 5) === "\\n") {
      separators.push(inputString[2]);
      inputString = inputString.slice(5);
    }
    return [inputString, separators];
  }
}
export default App;
