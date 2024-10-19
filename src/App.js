import { Console } from "@woowacourse/mission-utils";
// To-Do-List
// 정규표현식 만들기, 표현식이 연속으로 입력되면 오류 출력해야 함
// 연속으로 출력되는건 어떻게 알아차릴까? indexOf를 통해서 :가 있는지 확인한다. string의 길이만큼 indexOf를 다시 돌려보고
class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해주세요."
      );
      // 공백을 입력받았을 때, 0을 출력
      if (input.trim() === "") {
        Console.print(0);
        return;
      }
      // 양수인지 확인
      const isPositive = (input) => /^[+]?[1-9]\d*(\.\d)?$/.test(input);
      //, 혹은 :가 2번 이상 반복되면 true를 반환한다. 즉, false일때만 진행되도록 함
      const hasRepeatOperator = (input) => /[,:]{2,}/.test(input);
      // 커스텀 구분자 // 와 \n안의 값들은 true로 반환한다. -> true를 배열에 넣어야하나 흠
      const customDelimiterRegex = /\/\/([^a-zA-Z0-9])\\n/;
      // 커스텀 구분자가 2번 이상 반복되면 true를 반환한다.
      const hasRepeatCustomOperator = (input) =>
        /\/\/[^a-zA-Z0-9]{2,}\\n/.test(input);
      // 커스텀 구분자를 가져오기 위함
      const match = input.match(customDelimiterRegex);

      let delimiters = [",", ":"];

      if (match) {
        delimiters.push(match[1]);
      }
      const delimiterRegex = new RegExp(`[${delimiters.join("")}]`);
      let numberString = input.split(delimiterRegex);

      let sum = 0;

      for (let num of numberString) {
        if (!isPositive(num)) {
          throw new Error("입력 값은 양수여야 합니다.");
        }
        sum += parseInt(num, 10);
      }

      // 조건식을 만족하면 input 출력 향후, sum으로 바꿔야됨
      if (!hasRepeatOperator(input) && !hasRepeatCustomOperator(input)) {
        Console.print(`결과 : ${sum}`);
      } else {
        throw new Error(
          "입력 값에는 양수, 쉼표(,), 콜론(:), 커스텀 구분자(//와 \n 사이 사용자 임의 지정)만 입력이 가능합니다."
        );
      }
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
