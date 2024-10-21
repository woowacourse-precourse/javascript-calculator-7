import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 입력받기
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    // 빈 문자열 처리
    if (input === "") {
      return Console.print("결과 : 0");
    }

    // 기본 구분자 
    const separators = [",", ":"];

    // 커스텀 구분자 처리
    let inputString = input;
    let customSeparator = null;
    if (this.isCustom(input)) {
      [customSeparator, inputString] = this.splitCustom(input);
      separators.push(customSeparator); // 커스텀 구분자를 기본 구분자 배열에 추가
    }

    // 기본 구분자 처리
    for (const separator of separators) {
      inputString = inputString.split(separator).join(",");
    }

    // 잘못된 입력값 처리 및 숫자 변환
    const numbers = inputString.split(",").map(num => Number(num.trim()));
    
    // 구분자만 있거나 숫자가 아닌 경우 처리
    if (inputString === "" || inputString.match(/^[,:\n]+$/)) {
      return Console.print("[ERROR] 잘못된 형식입니다. 숫자를 입력해 주세요.");
    }

    // 음수 또는 NaN 처리
    if (numbers.some(num => isNaN(num) || num < 0)) {
      return Console.print("[ERROR] 음수 또는 잘못된 값을 입력했습니다.");
    }

    // 숫자 더하기 및 결과 반환
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    Console.print(`결과 : ${sum}`);
  }

  // 커스텀 구분자 스트링인지 확인 
  isCustom(input) {
    return input.startsWith("//");
  }

  // 커스텀 구분자를 추출하고 새로운 입력 문자열을 반환 
  splitCustom(input) {
    const parts = input.split("\n");
    const customSeparator = parts[0].slice(2); 
    const newInputString = parts[1]; 
    return [customSeparator, newInputString];
  }
}

export default App;

