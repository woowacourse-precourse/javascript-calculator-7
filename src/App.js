import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
      const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');

      const separators = [",", ":"];

      // 아무 것도 입력하지 않았을 경우(""), 0으로 처리하기
      if (input === "") {
          return MissionUtils.Console.print('결과 : 0');
      }

      const inputArray = [...input];
      const numArray = [];

      // 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열의 경우, 구분자를 기준으로 숫자 추출하기
      inputArray.forEach((str, index) => {
          const number = parseInt(str, 10);

          if (index % 2 === 0) { // 짝수
              numArray.push(number);

              if (isNaN(number)) {
                  throw Error('[ERROR] 입력값이 올바르지 않습니다.');
              }
          } else { // 홀수
              if (!separators.includes(str)) {
                  throw Error('[ERROR] 올바르지 않은 연산자를 사용했습니다.');
              }
          }
      });

      // 분리한 각 숫자의 합을 반환하기
      const result = numArray.reduce((acc, curr) =>
          acc + curr, 0
      );

      return MissionUtils.Console.print(`결과 : ${result}`);
  }
}

export default App;
