import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const USER_INPUT = await Console.readLineAsync("입력값을 입력해주세요.");
    const { separators, numString } =
      this.extractSeparatorsAndNumbers(USER_INPUT);

    Console.print(`구분자: ${separators.join(", ")}`);
    Console.print(`숫자 문자열: "${numString}"`);

    const totalSum = this.calculateSum(numString, separators);

    Console.print(`결과: ${totalSum}`);
  }

  // 숫자랑 구분자 분리
  extractSeparatorsAndNumbers(input) {
    const charArray = [...input];
    let separators = [",", ":"];
    let numString = "";
    let isCustomSeparatorFound = false;

    for (let i = 0; i < charArray.length; i++) {
      // '/' 찾기
      if (charArray[i] === "/" && charArray[i + 1] === "/") {
        isCustomSeparatorFound = true;
        i++;
        continue;
      }

      // '\n' 찾기
      if (
        isCustomSeparatorFound &&
        charArray[i] === "\\" &&
        charArray[i + 1] === "n"
      ) {
        isCustomSeparatorFound = false;
        i++;
        continue;
      }

      if (isCustomSeparatorFound) {
        // 커스텀 구분자 추가
        if (!separators.includes(charArray[i])) {
          separators.push(charArray[i]);
        }
      } else {
        // 숫자 쪽
        numString += charArray[i];
      }
    }

    return { separators, numString };
  }

  calculateSum(numString, separators) {
    // 정규 표현식
    const separateMark = new RegExp(`[${separators.join("")}]`);
    const numbers = numString.split(separateMark).filter(Boolean); // 빈 문자열 제거

    // 합계
    return numbers.reduce((sum, num) => {
      const parsedNum = parseInt(num, 10); // 문자열을 숫자로 변환
      return isNaN(parsedNum) ? sum : sum + parsedNum; // NaN 체크 후 합계 계산
    }, 0);
  }
}

export default App;
