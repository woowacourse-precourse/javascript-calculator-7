import { Console } from "@woowacourse/mission-utils";

class App {
  constructor(){
    this.defaultSeparator = [',', ':'];
  }
  
  async run() {
    try {
      Console.print('덧셈할 문자열을 입력해주세요.');
      const INPUT_DATA = await Console.readLineAsync("");

      // 커스텀 구분자 추출 및 제거
      const [EXTRACT_DATA, SEPARATORS] = this.extractSeparator(INPUT_DATA, this.defaultSeparator); 

      // 구분자를 기준으로 분리
      const SPLIT_DATA = this.splitString(EXTRACT_DATA, SEPARATORS);    

      // 분리된 숫자들의 합
      const SUM = SPLIT_DATA.reduce((acc, number) => acc + number, 0);

      Console.print(`결과 : ${SUM}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
      throw new Error(error.message);  // 예외 발생 시 Promise가 reject되도록 수정
    }
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
    // 여기에서 음수에 대한 예외 처리
    const numbers = splitData.map(Number);
    if (numbers.some(number => number < 0)) {
      throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
    }
  
    return numbers;
  }
}
export default App;
