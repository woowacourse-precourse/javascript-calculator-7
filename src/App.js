import { Console } from "@woowacourse/mission-utils"

class App {
  async run() {
    try {
      Console.print("덧셈할 문자열을 입력해 주세요.");
      const input = await Console.readLineAsync(); // 사용자의 입력 기다림
      Console.print(`결과 : ${this.add(input)}`);
    } catch (error) { // 에러 발생시 에러 메시지 출력
      Console.print(error.message);
      throw error;
    }
  }


  add(input) {
    if (input === "") return 0;
    else {
      let sum = 0;
      let nums = [];

      if (input.startsWith("//")) {
        const startIndex = input.indexOf("//") + 2;
        const endIndex = input.indexOf("n");
        const sep = input.substring(startIndex, endIndex - 2);
        const newstr = input.slice(endIndex + 1)
        nums = newstr.split(sep);

      }
      else {
        let newstr = input.replace(/[,:]/g, "-")
        nums = newstr.split("-");
      }

      for (const num of nums) {
        const parsenum = +num;
        if (isNaN(parsenum) || num.trim() === "") {
          throw new Error("[ERROR] 잘못된 입력입니다.");
        }
        sum += +num;
      }
      return sum;
    }
  }


}

export default App;

