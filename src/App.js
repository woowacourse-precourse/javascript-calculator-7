import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    function getArrSum(arr) {
      return arr.reduce(
        (accumulator, currentValue) =>
          Number(accumulator) + Number(currentValue),
        0
      );
    }

    async function getUsername() {
      try {
        const str = await Console.readLineAsync(
          "덧셈할 문자열을 입력해 주세요.\n"
        );
        let sum = 0;
          const numArr = str.split(/[,: ]/);
          sum = getArrSum(numArr);
        Console.print("결과 : " + sum);
      } catch (error) {
        Console.print("에러가 발생했습니다: ", error);
      }
    }

    getUsername();
  }
}

export default App;
