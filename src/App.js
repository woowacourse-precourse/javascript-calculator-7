import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );

      let numbers = input;
      let separator = [",", ":"]; // 기본 구분자
      let numberList;

      numberList = this.extractNumbers(numbers, separator); // 숫자 리스트 생성
      const result = this.calculateSum(numberList); // 숫자 합산
      MissionUtils.Console.print(`결과 : ${result}`);
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
    }
  }

  extractNumbers(numbers, separator) {
    let numberList;
    if (numbers.startsWith("//")) {
      const list = numbers.split("\\n");
      const customSeparator = list[0].slice(2); // 커스텀 구분자 추출
      const separateNumbers = list[1]; // 계산할 부분 추출
      const regex = new RegExp(`[${customSeparator}]`, "g");
      numberList = separateNumbers.split(regex).map(Number);
    } else {
      numberList = numbers.split(new RegExp(separator.join("|"))).map(Number);
    }
    return numberList;
  }

  calculateSum(numberList) {
    return numberList.reduce((sum, number) => sum + number, 0); // 숫자 합산
  }
}

export default App;
