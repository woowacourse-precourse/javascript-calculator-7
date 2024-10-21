import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    try {
      const result = this.calculate(input);
      MissionUtils.Console.print(`결과 : ${result}`);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }

  calculate(input) {
    // 입력이 빈 문자열일 경우 -> 0 반환
    if (input === "") {
      return 0;
    }

    // 구분자 처리: 콤마(,)와 콜론(:)
    let delimiter = /,|:/;

    // 커스텀 구분자 처리: 패턴으로부터 추출
    if (input.startsWith("//")) {
      const match = input.match(/^\/\/(.*?)(\\n|\n)/); // \\n 및 \n 모두 처리
      if (match) {
        delimiter = new RegExp(match[1], "g"); // 커스텀 구분자로 구분자 정규 표현식 설정
        input = input.slice(match[0].length); // 구분자 부분을 제외한 나머지 문자열 추출
      }
    }

    const numbers = input.split(delimiter).map(num => {
      const number = Number(num.trim());
      // NaN 처리: 숫자가 아닌 경우 0으로 대체
      if (isNaN(number)) {
        return 0;
      }
      return number;
    });

    // 입력 값에 음수가 있을 경우 에러 발생
    const negatives = numbers.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error("[ERROR] 음수는 허용되지 않습니다: " + negatives.join(","));
    }

    // 결과값
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}

export default App;
