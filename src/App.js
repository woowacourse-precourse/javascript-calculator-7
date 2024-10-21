import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {

      // 문자열을 입력받는다.
      const input = await Console.readLineAsync("계산할 문자열을 입력해 주세요: ");

      const result = this.calculate(input);
      Console.print(`결과: ${result}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
  calculate(input) {
    //빈 문자열인지 검사
    if (input === "") return 0;

    //구분자 배열 생성
    let delimiterArray = [',', ':'];
    // 커스텀 구분자
    const customDelimiter = input.match(/^\/\/(.)\\n/);
    let numString = input;

    if (customDelimiter) {
      //커스텀 구분자 배열에 추가
      delimiterArray.push(customDelimiter[1]);
      numString = input.split('\\n')[1];
    }

    const nums = input.split(new RegExp(`[${delimiterArray.join('')}]`)).map(Number);

    return nums.reduce((sum, nums) => sum + nums, 0);
  }
}
export default App;