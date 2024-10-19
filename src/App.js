import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    MissionUtils.Console.print("덧셈할 문자열을 입력해 주세요.");

    const userStr = await MissionUtils.Console.readLineAsync("");
    this.result(userStr);
  }

  // 입력값에서 숫자 추출하여 더하기
  result(userStr) {
    const regex = /[^,:\d]/;
    const test = regex.test(userStr);
    const found = userStr.match(/\d+/g);

    let num = 0;
    if (found === null) this.printresult(num);
    if (found !== null) {
      const customRegex = /\/\/.[^\\n]*\\n/;
      const customTest = customRegex.test(userStr);
      if (customTest === false) {
        if (test) {
          MissionUtils.Console.print(
            "[ERROR] 유효하지 않은 입력값입니다. 다시 입력해 주세요."
          );
          return;
        }
        found.map((item) => (num += Number(item)));
        this.printresult(num);
        return;
      }

      const custom = userStr.match(/(?<=\/\/).*?(?=\\n)/).join("");
      const reg = /\/\/.[^\\n]*\\n/gim;
      const customDeleted = userStr.replace(reg, "");
      const splitted = customDeleted.split(custom);
      splitted.map((item) => (num += Number(item)));
      this.printresult(num);
    }
  }

  //더한 값 출력
  printresult(num) {
    MissionUtils.Console.print(`결과 : ${num}`);
  }
}

export default App;
