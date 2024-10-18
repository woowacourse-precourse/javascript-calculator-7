import { Console } from "@woowacourse/mission-utils";

class Caculator {
  async calculate () {
    const input = await this.getInput();
    Console.print("결과 : 1");
  }

  getInput() {
    try {
      const input = Console.readLineAsync('닉네임을 입력해주세요.');
      return input;
    } catch (error) {
      
    }
  }

  addNumbers(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
}

export default Caculator;