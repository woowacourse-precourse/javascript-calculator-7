import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    Console.print("결과 : " + input);
  }

  validateNumbers(numbers) {
    numbers.forEach((number) => {
      const parsedNumber = parseInt(number);

      if (isNaN(parsedNumber)) {
        throw new Error("[ERROR] 숫자가 아닌 값이 포함되어 있습니다.");
      }
    });
  }
}

export default App;
