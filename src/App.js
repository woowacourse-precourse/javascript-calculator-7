import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요. \n"
    );

    const result = this.calculate(input);
    MissionUtils.Console.print(`결과 : ${result}`);
  }

  calculate(input) {
    // 기본 구분자는 "," 또는 ":"이다.
    let delimiter = /,|:/;

    // 문자열 앞부분이 //로 시작하면 커스텀 구분자를 지정한 것
    if (input.startsWith("//")) {
      // ("^// : 문자열의 시작은 //, (.) : // 다음의 한 문자 추출. 이것이 커스텀 구분자 (.*) : 줄바꿈 이후의 모든 문자열 추출 ");

      // 정규표현식에서 슬래시는 이스케이프 처리(\/\/), 줄바꿈 문자도 이스케이프 처리(\\n)한다. 둘 다 문자열 취급해야 하기 때문.?? -> 근데 이럼 테스트에서 에러남
      const match = input.match(/^\/\/(.)\\n(.*)$/);

      // 이렇게 하면 테스트에서는 통과고 start에서는 에러임 대체 왜...??
      // const match = input.match(/^\/\/(.)\n(.*)$/);

      // 만약 MATCH가 존재한다면(커스텀 구분자를 찾았다면)
      // MATCH[1] : 커스텀 구분자를 정규식 객체로 생성해 delimiter 변수에 저장
      // MATCH[2] : 나머지 문자열을 input 변수에 할당.
      if (match) {
        delimiter = new RegExp(match[1]);
        input = match[2];
      }
    }

    const numbers = input.split(delimiter).map((num) => {
      const parsed = Number(num);

      if (isNaN(parsed) || parsed < 0) {
        throw new Error("[ERROR]");
      }

      return parsed;
    });

    // 돌면서 발견되는 수를 누적해서 더하기
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
}

export default App;
