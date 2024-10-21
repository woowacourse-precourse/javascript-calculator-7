import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해주세요\n"
    );

    // "기본 구분자"로 구분하기
    if (input.indexOf("\\n") === -1) {
      const arr = input.split(/,|;/);
      let resultNum = 0;
      for (let i = 0; i < arr.length; i++) {
        resultNum += +arr[i];
      }
      console.log("-1 나왔어요");
      MissionUtils.Console.print(`결과 : ${resultNum}`);
    } else {
      // "커스텀 구분자"로 구분하기
      const arr = input.split("\\n");
      console.log(arr);
      let separator;
      if (arr[0].includes("//")) {
        separator = arr[0].slice(2, arr[0].length);
        console.log(separator);
      } else {
        throw new Error(`[ERROR]: ${error.message}`);
      }

      let arr2 = arr[1].split(separator);
      console.log(arr2);
      let answer = 0;
      for (let num of arr2) {
        answer += Number(num);
      }

      MissionUtils.Console.print(`결과 : ${answer}`);
    }
  }
}

export default App;
