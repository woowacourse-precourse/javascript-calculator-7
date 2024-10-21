import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await this.getInput();
      const parseInput = this.parseString(input.trim());
      const result = this.calculateSum(parseInput);
      MissionUtils.Console.print(`결과 : ${result}`);
    } catch (error) {
      throw error;
    }
  }

  // input을 받는 함수
  async getInput() {
    return await MissionUtils.Console.readLineAsync();
  }

  // 구분자가 든 배열과 덧셈할 문자열을 리턴한다.
  // 커스텀 구분자가 존재한다면 delimiter에 추가.
  // 없다면 기본 구분자인 쉼표와 콜론을 delimiter에 추가.
  disassembleDelimiterAndString(input) {
    const delimiter = [",", ":"]; // 기본 구분자
    let string = input;

    const regex = /^\/\/(.+?)(?:\\n|\n)/;
    let match;

    while ((match = regex.exec(string)) !== null) {
      // 새로운 구분자 추출
      const newDelimiter = match[1];

      // 새로운 구분자에 숫자가 포함되어 있는지 확인
      if (/\d/.test(newDelimiter)) {
        throw new Error(`[ERROR] 구분자에 숫자를 포함할 수 없습니다.`);
      }

      // 새로운 구분자를 delimiter 배열에 추가 (중복 방지)
      if (!delimiter.includes(newDelimiter)) {
        delimiter.push(newDelimiter);
      }

      // 매치된 부분을 문자열에서 제거
      string = string.slice(match[0].length);
    }

    return { delimiter, string };
  }

  // split 연산을 위한 정규표현식을 생성하는 함수
  makeSplitRegExp(delimiter) {
    // 정규표현식에서 특별한 의미를 가지는 문자들 앞에는 역슬래시로 이스케이프 되어야 한다.
    const escapedDelimiters = delimiter.map((d) =>
      d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );
    return new RegExp(escapedDelimiters.join("|"), "g");
  }

  // string인 input을 구분자 기준으로 쪼개서 숫자로 변환할 배열에 담는다.
  parseString(input) {
    // 커스텀 구분자가 존재하는지 정규식으로 검사 후 구분자와 문자열로 분해한다.
    const { delimiter, string } = this.disassembleDelimiterAndString(input);
    // delimiter을 split 연산을 위해 정규표현식으로 변환
    const delimiterToRegex = this.makeSplitRegExp(delimiter);
    // 있다면 커스텀 구분자 설정 뒤를 input으로 설정
    const numStrs = string.split(delimiterToRegex);
    // 구분자를 기준으로 나뉜 문자열을 numStrs에 추가
    return this.verifyNumber(numStrs);
  }

  // 구분자를 제외한 문자열형식의 숫자들이 든 배열을 input으로 받아, 실제 숫자인지, 음수인지 검사한다.
  // 숫자가 아니거나 음수이면 예외 처리를 한다.
  verifyNumber(numbers) {
    // 배열의 요소가 NaN이거나 음수이면 에러를 리턴한다.
    const verifiedNumbers = [];
    for (let num of numbers) {
      if (isNaN(Number(num)) || Number(num) < 0) {
        throw new Error(`[ERROR] 유효한 숫자가 아닙니다.`);
      } else {
        verifiedNumbers.push(Number(num));
      }
    }
    // 숫자로 변환된 요소들을 리턴한다.
    return verifiedNumbers;
  }

  // 숫자를 더한다.
  calculateSum(numbers) {
    return numbers.reduce((res, ele) => res + ele, 0);
  }
}

export default App;
