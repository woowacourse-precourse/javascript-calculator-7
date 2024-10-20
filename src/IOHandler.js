import { Console } from "@woowacourse/mission-utils";

class InputHandler {
  async getInput() {
    try {
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      return input;
    } catch (error) {
      throw new Error("[ERROR] : 입력 에러가 발생했습니다.");
    }
  }

  print(result) {
    Console.print("결과 : " + result);
  }
}

export default InputHandler;
