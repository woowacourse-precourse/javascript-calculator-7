import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await this.getInput();
      const result = this.calculate(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
    }
  }

  async getInput() {
    return await Console.readLineAsync("덧셈할 문자열을 입력해 주세요:\n");
  }

  calculate(input) {
    // 1번 기능: 빈 문자열일 경우 0을 반환
    if (input === "") {
      return 0;
    }
    // 3번 기능: 커스텀 구분자가 있는지 확인
    let numbers;
    const customSeparatorFormat = input.match(/^\/\/(.)\\n(.*)/); // 커스텀 구분자가 있는지 match 메서드로 확인

    if (customSeparatorFormat) {
      const customDelimiter = customSeparatorFormat[1]; // 커스텀 구분자를 추출
      numbers = customSeparatorFormat[2].split(customDelimiter).map(Number); // 커스텀 구분자로 숫자를 분리
    } else {
      // 2번 기능: 쉼표(,) 또는 콜론(:)을 구분자로 분리하여 숫자를 더함
      numbers = input.split(/[,|:]/).map(Number); // 쉼표 또는 콜론을 기준으로 분리 후 숫자들을 numbers 배열로 변환
    }

    return numbers.reduce((acc, current) => acc + current, 0); // reduce 메서드를 이용해 숫자 합산
  }
}

export default App;
