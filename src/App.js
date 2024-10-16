import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    let string = await this.getString();
    const NUMS = await this.basicSumNums(string);
    Console.print("결과 : "+ NUMS);
  }

  // 사용자 입력 받기
  async getString() {
    try {
      let string = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      return string;
    } catch (error) {
      throw new Error('[ERROR]');
    }
  }

  // 쉼표와 콜론 덧셈
  async basicSumNums(arrayString) {
    let nums = await arrayString.split(/,|:/).map(function(num){return parseInt(num);});
    const SUM_NUMS = await nums.reduce((a, b) => a + b);
    return SUM_NUMS;
  }

  // 커스텀 구분자 추출
  async customSeparator(arrayString) {
    if (arrayString.indexOf('//') != -1 && arrayString.indexOf('\\n') != -1) {
      const SEPARATOR = arrayString.substring(arrayString.indexOf('//') + 2, arrayString.indexOf('\\n'));
      return SEPARATOR;
    }
  }
}

export default App;
