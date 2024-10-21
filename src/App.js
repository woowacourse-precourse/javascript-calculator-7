import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // 사용자로부터 입력 받기 (줄바꿈 포함)
      const input = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );

      // 계산 결과
      const result = this.calculate(input.trim());

      // 결과 출력
      MissionUtils.Console.print(`결과: ${result}`);
    } catch (error) {
      // 오류났을 때 출력
      MissionUtils.Console.print(error.message);
    }
  }

  calculate(input) {
    // 빈 문자열일 경우에 0 반환
    if (input === "") {
      return 0;
    }

    let separator = /[,\:]/; // 기본 구분자는 쉼표와 콜론
    let numbersInput = input; // 기본 문자열 입력

    // 커스텀 구분자 (문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용)
    if (input.startsWith("//")) {
      // 커스텀 구분자가 있는지 확인
      const custom_separator =
        input.match(/^\/\/(.)\\n/) || input.match(/^\/\/(.)\n/); // 커스텀 구분자 추출

      if (custom_separator) {
        separator = new RegExp(`[${custom_separator[1]}]`); // 커스텀 구분자 정규식 변환
        numbersInput = input.split("\\n")[1] || input.split("\n")[1]; // 이후의 문자열(숫자)을 사용
      }
    }

    // 쉼표(,)와 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우, 구분자를 기준으로 분리한 각 숫자의 합을 반환
    const numbers = numbersInput.split(separator).map((num) => {
      const parsed = Number(num);
      if (isNaN(parsed)) {
        throw new Error("[ERROR] 잘못된 문자가 포함되어 있습니다.");
      }
      if (parsed < 0) {
        throw new Error("[ERROR] 음수는 허용되지 않습니다.");
      }
      return parsed;
    });

    // numbers에 있는 숫자들의 합 구하기
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }

    // 최종 합계 반환
    return sum;
  }
}

export default App;
