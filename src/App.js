import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    Console.print('덧셈할 문자열을 입력해 주세요.');
    const input = await Console.readLineAsync('');

    if (!input) {
      return Console.print("결과 : 0");
    }

    let deli = /[,|:]/;
    let part = input;

    if (input.startsWith("//")) {
      const [delimiterLine, ...numberLines] = input.split("\\n");
      const custom = delimiterLine.slice(2);
      const numbers = numberLines.join("");
      deli = new RegExp(`[${custom},|:]`);
      part = numbers;
    } else {
      if (isNaN(input[0]) || input[0] === "-") {
        throw new Error("[ERROR] 커스텀 구분자를 사용하지 않는다면 양수로 시작해야 합니다.");
      }
    }

    const numbers = part.split(deli).map(Number);
    for (const number of numbers) {
      if (isNaN(number) || number < 1) {
        throw new Error("[ERROR] 계산식에 구분자, 양수 이외의 값이 존재합니다.");
      }
    }

    Console.print("결과: " + numbers.reduce((sum, number) => sum + number, 0));
  }

}

export default App;
