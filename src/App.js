import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    MissionUtils.Console.print("덧셈할 문자열을 입력해 주세요.");

    const userStr = await MissionUtils.Console.readLineAsync("");
    this.result(userStr);
  }

  // 입력값에서 숫자 추출하여 더하기
  result(userStr) {
    let num = 0;

    // 빈 문자열을 입력했을 때
    if (userStr === "") {
      this.printresult(num);
      return;
    }

    let regex = /[^,:\d]/;
    let customRegex = /\/\/.[^\\n]*\\n/;
    const customTest = customRegex.test(userStr);

    // 커스텀 구분자가 있을 때
    if (customTest) {
      const customArr = userStr.match(/(?<=\/\/).*?(?=\\n)/);
      const customDelimiter = customArr.join("");
      const reg = /\/\/.[^\\n]*\\n/gim;
      const customDeleted = userStr.replace(reg, "");

      if (
        regex.test(customDeleted) &&
        customDeleted.indexOf(customDelimiter) === -1
      ) {
        MissionUtils.Console.print(
          "[ERROR] 유효하지 않은 입력값입니다. 다시 입력해 주세요."
        );
        return;
      }

      const delimiters = customArr
        .concat([",", ":"])
        .map((c) => "\\" + c)
        .join("");
      const specialChars = new RegExp(`[${delimiters}]`, "g");
      const splitted = customDeleted.split(specialChars);
      splitted.forEach((item) => (num += Number(item)));
      this.printresult(num);
    }

    // 커스텀 구분자가 없을 때
    if (!customTest) {
      if (regex.test(userStr)) {
        MissionUtils.Console.print(
          "[ERROR] 유효하지 않은 입력값입니다. 다시 입력해 주세요."
        );
        return;
      }
      const found = userStr.match(/\d+/g);
      found.forEach((item) => (num += Number(item)));
      this.printresult(num);
    }
  }

  //더한 값 출력
  printresult(num) {
    MissionUtils.Console.print(`결과 : ${num}`);
  }
}

export default App;
