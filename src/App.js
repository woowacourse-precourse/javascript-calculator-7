import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    function isCustomSeparator(str) {
      return str.includes("//") && str.includes("\\n");
    }

    function getCustomSeparator(str) {
      return str.split("//")[1].split("\\n")[0];
    }

    function getArrSum(arr) {
      if (isNegative(arr)) throw Error("[ERROR] 음수 입력 불가능");

      return arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
    }

    function isNegative(arr) {
      return arr.some((num) => num < 0);
    }

    async function getUsername() {
      const str = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      let sum = 0;
      if (isCustomSeparator(str)) {
        const numArr = str
          .split("\\n")[1]
          .split(getCustomSeparator(str))
          .map(Number);

        sum = getArrSum(numArr);
      } else {
        const numArr = str.split(/[,: ]/).map(Number);
        sum = getArrSum(numArr);
      }
      if (Number.isNaN(sum) || Number.isInteger(sum) === false) {
        throw Error("[ERROR] 잘못된 입력입니다.");
      }
      Console.print("결과 : " + sum);
    }

    try {
      await getUsername();
    } catch (error) {
      Console.print(error.message); // 에러 메시지 출력
      throw error; // 에러 다시 throw 해서 테스트에서 잡을 수 있도록 함
    }
  }
}

export default App;
