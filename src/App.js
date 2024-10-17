import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    MissionUtils.Console.print("덧셈할 문자열을 입력해 주세요.");

    const userStr = await MissionUtils.Console.readLineAsync("");
    this.result(userStr);
  }

  // 입력값에서 숫자 추출하여 더하기
  result(userStr) {
    let found = userStr.match(/\d+/g);

    let num = 0;
    if (found === null) this.printresult(num);
    if (found !== null) {
      found.map((item) => (num += Number(item)));
      this.printresult(num);
    }
  }

  //더한 값 출력
  printresult(num) {
    MissionUtils.Console.print(`결과 : ${num}`);
  }
}

export default App;
