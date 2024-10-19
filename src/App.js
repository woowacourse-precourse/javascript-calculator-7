import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await this.getUserInput(); //사용자 입력
      const result = this.calculateSum(input); //결과값 계산
      Console.print(`결과: ${result}`); //결과 출력
    } catch (error) {
      Console.print(error.message); //에러처리
      throw error;
    }
  }
}
export default App;
