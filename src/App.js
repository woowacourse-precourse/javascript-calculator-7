import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    // 문자열 입력
    MissionUtils.Console.print("덧셈할 문자열을 입력해 주세요.");
    const input = await MissionUtils.Console.readLineAsync("");

    // 입력값이 비어 있는 경우 0 출력
    if (input === "") {
      MissionUtils.Console.print(0);
      return;
    }

    let numbers;

    // 커스텀 구분자 처리
    const PATTERN = /^\/\/(.*)\\n(.*)$/;
    const MATCH = input.match(PATTERN);

    if (MATCH) {
      const CUSTOM = MATCH[1]; // 커스텀 구분자
      const NUMS = MATCH[2]; // 숫자부분

      numbers = NUMS.split(CUSTOM);
    } else {
      // 기본 구분자 처리
      numbers = input.split(/,|:/);
    }

    // 연속된 구분자 처리
    if (numbers.some((num) => num === "")) {
      throw new Error("[ERROR] 연속된 구분자는 사용할 수 없습니다.");
    }

    // 숫자로 변환, 문자 예외 처리
    numbers = numbers.map((num) => {
      if (isNaN(Number(num))) {
        throw new Error("[ERROR] 문자는 입력할 수 없습니다.");
      }
      return Number(num);
    });
    // 합 계산
    let sum = 0;
    for (const num of numbers) {
      sum += num;
    }

    // 결과 출력
    MissionUtils.Console.print(`결과 : ${sum}`);
  }
}

export default App;
