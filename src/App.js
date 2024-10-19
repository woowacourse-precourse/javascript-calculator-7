import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {

    try {

      Console.print("덧셈할 문자열을 입력해 주세요.");
      let input = await Console.readLineAsync("");

      let delimiter;
      if (input.length > 0 && input.startsWith('//')) { //커스텀 구분자가 지정된 경우
        delimiter = this.getDelimiter(input);
        input = input.split('\\n')[1];
      }
      else {  //기본 구분자를 사용하는 경우
        delimiter = /[,:]/;
      }

      let numbers = input.split(delimiter).map((v) => +v);

      numbers.forEach((v) => {
        if (v < 0)
          throw new Error("[ERROR] 잘못된 입력입니다. 음수가 입력에 포함됩니다.")
      })

      let sum = numbers.reduce((acc, cur) => acc + cur, 0);

      Console.print(`결과 : ${sum}`);
      return;

    }
    catch (err) {
      Console.print(err.message);
      return;
    }
    
  }

  getDelimiter(input) {
    const match = input.match(/\/\/(.+)\\n/);  // "//"와 "\n" 사이의 커스텀 구분자 추출
    if (match === null) {
      throw new Error("[ERROR] 잘못된 입력입니다. 커스텀 구분자를 읽을 수 없습니다.");
    }
    return new RegExp(`[${match[1]}]`); // 커스텀 구분자를 정규식으로 변환
  }

}

export default App;
