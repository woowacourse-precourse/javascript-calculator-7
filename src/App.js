import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");

      if (input.length === 0) {
        MissionUtils.Console.print('[ERROR] 입력값을 입력하지 않았습니다.');
        return;
      }

      //유효한 입력인지 검사
      if (this.isValid(input)) {
        // 유효한 입력값일 경우, 계산하는 함수를 실행
        this.calculate();
      } else {
        MissionUtils.Console.print('[ERROR] 잘못된 값을 입력하셨습니다.');
        return;
      }
    } catch (error) {
      MissionUtils.Console.print(`[ERROR]: ${error}`);
      return;
    }

    MissionUtils.Console.print('계산 성공');
  }

  isValid(input) {
    const delimiters = [',', ':'];

    // 커스텀 구분자가 있는지 확인
    if (input.slice(0, 2) === '//') {
      for (let i = 2; i < input.length; i++) {
        if (input[i] === "\\" && input[i + 1] === "n") {
          const NEW_DELIMITER = input.slice(2, i);
          delimiters.push(NEW_DELIMITER);
          input = input.slice(i + 2);
          break;
        }
      }
    }
    MissionUtils.Console.print(delimiters);
    MissionUtils.Console.print(input);
  }

  // 입력값을 계산하는 함수
  calculate() {
    // 구분자를 기준으로 숫자들을 분리한다.
    // 숫자 중 음수가 있는지 체크한다.
    // 입력값중 숫자가 음수일경우 "[ERROR] 음수의 값을 입력하셨습니다."라는 메시지와 함께 앱을 종료시킨다.
    // 양수이면 합산한다.
    // 최종 합산된 값을 반환한다.  }
    }
}
export default App;
