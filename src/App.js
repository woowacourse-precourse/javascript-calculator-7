import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {

    Console.print("덧셈할 문자열을 입력해 주세요.");
    let input = await Console.readLineAsync("");

    if (input.length === 0) {
      this.printResult(0);
      return;
    }

    let delimiter;
    if (input.length > 0 && input.startsWith('//')) { //커스텀 구분자가 지정된 경우
      delimiter = this.getDelimiter(input);
      input = input.split('\\n')[1];
    }
    else {  //기본 구분자를 사용하는 경우
      delimiter = /[,:]/;
    }

    let numbers = input.split(delimiter);

    numbers = numbers.map((v) => {
      if (v.length === 0 || isNaN(+v))
        throw new Error("[ERROR] 잘못된 입력입니다.");
      if (+v < 0)
        throw new Error("[ERROR] 잘못된 입력입니다. 음수가 입력에 포함됩니다.");
      return +v;
    })
    let sum = numbers.reduce((acc, cur) => acc + cur, 0);

    Console.print(`결과 : ${sum}`);
    
  }

  printResult(sum) {
    Console.print(`결과 : ${sum}`);
  }

  getDelimiter(input) {
    const match = input.match(/\/\/(.)\\n(.*)/);  // "//"와 "\n" 사이의 커스텀 구분자 추출
    if (match === null) {
      throw new Error("[ERROR] 잘못된 입력입니다. 커스텀 구분자를 읽을 수 없습니다.");
    }
    if (match[1].length >= 2) {
      throw new Error("[ERROR] 잘못된 입력입니다. 커스텀 구분자 형식이 틀렸습니다.");
    }
    if (match[1].length === 1 && !isNaN(+match[1]))
      throw new Error("[ERROR] 잘못된 입력입니다. 숫자는 커스텀 구분자가 될 수 없습니다.");

    return new RegExp(`[${match[1]},:]`); // 커스텀 구분자 + 기본 구분자를 정규식으로 변환
  }

}

export default App;
