import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      const result = this.calculateSum(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
      throw error; //test 코드에서 예외 발생 여부 확인
    }
  }

  getCustomDelimiter(input) { // 커스텀 구분자를 찾는 과정. 찾아서 저장
    const customDelimiterMatch = input.match(/^\/\/(.)\\n/);
    return customDelimiterMatch ? customDelimiterMatch[1] : null;
  }

  calculateSum(input) {
    if (input === '') {
      return 0;
    }

    let delimiter = ',|:'
    const custom = this.getCustomDelimiter(input); // 커스텀 구분자 찾음

    if (custom) {
      delimiter += '|' + custom; // 커스텀 구분자 추가
      input = input.replace(/^\/\/.\\n/, ''); // 커스텀 구분자 선언부 제거
    }

    const numbers = input.split(new RegExp(delimiter)).map(num => { //정규표현식으로 구분자를 찾음
      const trimmedNum = num.trim();
      if(trimmedNum === ""){
        throw new Error("[ERROR] 연속된 구분자는 사용할 수 없습니다.")
      }
      const parsed = parseInt(num, 10);
      if (isNaN(parsed)){
        throw new Error("[ERROR] 숫자가 아닙니다.");
      }
      else if (parsed < 0) {
        throw new Error("[ERROR] 음수는 허용되지 않습니다.");
      }
      return parsed;
    }); 

    if (!custom && input.match(/[^0-9,:]/)) {
      throw new Error("[ERROR] 지정되지 않은 구분자가 사용되었습니다.");
    }

    let sum = 0; //기본을 0으로 두고 for문을 통해 숫자 합산
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }

}

export default App;
