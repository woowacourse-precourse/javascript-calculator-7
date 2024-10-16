import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    const string = await this.getString();
    const nums = await this.basicSumNums(string);
    Console.print("결과 : "+ nums);
  }

  // 사용자 입력 받기
  async getString() {
    try {
      const string = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      return string;
    } catch (error) {
      throw new Error('[ERROR]');
    }
  }

  // 쉼표와 콜론 덧셈
  async basicSumNums(arrayNum) {
    const nums = await arrayNum.split(/,|:/).map(function(num){return parseInt(num);});
    const sumNum = await nums.reduce((a, b) => a + b);
    return sumNum
  }
  
}

export default App;
