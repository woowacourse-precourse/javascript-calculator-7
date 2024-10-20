import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    try {
      const str = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
      if (this.hasWhitespace(str)) {
        throw new Error("[ERROR] 입력에 공백이 포함되어 있습니다.");
      }
      console.log(str);
    } catch (error) {
      console.error(error.message);
    }
  }


  hasWhitespace(str) {
    const pattern = /\s/;
    return pattern.test(str);
  }
}

export default App;
